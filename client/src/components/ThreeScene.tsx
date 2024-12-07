import { Canvas, useFrame } from "@react-three/fiber"
import { useEffect, useRef, useMemo } from "react"
import * as THREE from "three"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { OrbitControls } from "@react-three/drei"

const colors = {
  primary: new THREE.Color("#00A8E1"),
  primaryGlow: new THREE.Color("#33D6FF"),
  secondary: new THREE.Color("#FF1654"),
  secondaryGlow: new THREE.Color("#FF4E6B"),
  highlight: new THREE.Color("#F9ED69"),
  highlightGlow: new THREE.Color("#FFE084"),
  connection: new THREE.Color("#EAEAEA"),
}

function Nodes() {
  const groupRef = useRef<THREE.Group>(null)

  const { nodes, connections } = useMemo(() => {
    const nodesArray: {
      position: THREE.Vector3
      type: 'primary' | 'secondary' | 'highlight'
      scale: number
      initialScale: number
      glowIntensity: number
    }[] = []
    const connectionsArray: {
      from: THREE.Vector3
      to: THREE.Vector3
      color: THREE.Color
      opacity: number
    }[] = []

    const numNodes = 100

    for (let i = 0; i < numNodes; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      const position = new THREE.Vector3(x, y, z)

      let type: 'primary' | 'secondary' | 'highlight'
      if (i < numNodes * 0.4) {
        type = 'primary'
      } else if (i < numNodes * 0.7) {
        type = 'secondary'
      } else {
        type = 'highlight'
      }

      nodesArray.push({
        position,
        type,
        scale: 1.0,
        initialScale: type === 'primary' ? 0.5 : type === 'secondary' ? 0.3 : 0.6,
        glowIntensity: 0.5,
      })

      if (i > 0) {
        const nearestNodes = findNearestNodes(position, nodesArray.slice(0, i), 3)
        nearestNodes.forEach((nearNode) => {
          connectionsArray.push({
            from: position,
            to: nearNode.position,
            color: colors.connection,
            opacity: 0.3,
          })
        })
      }
    }

    return { nodes: nodesArray, connections: connectionsArray }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime()
      const mouseX = state.mouse.x * 0.1
      const mouseY = state.mouse.y * 0.1
      groupRef.current.rotation.x += 0.002 + mouseY * 0.01
      groupRef.current.rotation.y += 0.003 + mouseX * 0.01
    }
  })

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = 0.4
      groupRef.current.rotation.y = 0.2
    }
  }, [])

  const nodeMaterials = useMemo(() => {
    return {
      primary: new THREE.MeshBasicMaterial({
        color: colors.primary,
        transparent: true,
        opacity: 0.8,
      }),
      secondary: new THREE.MeshBasicMaterial({
        color: colors.secondary,
        transparent: true,
        opacity: 0.8,
      }),
      highlight: new THREE.MeshBasicMaterial({
        color: colors.highlight,
        transparent: true,
        opacity: 0.8,
      }),
    }
  }, [])

  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(0.05, 16, 16), [])
  const lineMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: colors.connection,
        transparent: true,
        opacity: 0.3,
      }),
    []
  )

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh
          key={`node-${i}`}
          position={node.position.toArray()}
          scale={[node.scale, node.scale, node.scale]}
          geometry={sphereGeometry}
          material={nodeMaterials[node.type]}
        />
      ))}

      {connections.map((connection, i) => {
        const points = [connection.from, connection.to]
        return (
          <line
            key={`connection-${i}`}
            geometry={new THREE.BufferGeometry().setFromPoints(points)}
            material={lineMaterial}
          />
        )
      })}
    </group>
  )
}

function findNearestNodes(
  position: THREE.Vector3,
  nodes: { position: THREE.Vector3 }[],
  count: number
) {
  return nodes
    .map((node) => ({
      position: node.position,
      distance: position.distanceTo(node.position),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count)
}

export function ThreeScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
          depth: true,
          preserveDrawingBuffer: true,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#0D1117'), 0)
        }}
      >
        <fog attach="fog" args={['#0D1117', 5, 25]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} color="#00A8E1" intensity={0.5} />
        <pointLight position={[-5, -5, -5]} color="#FF1654" intensity={0.5} />
        <Nodes />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}