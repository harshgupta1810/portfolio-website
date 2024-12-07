import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

function Nodes() {
  return (
    <group>
      {Array.from({ length: 100 }).map((_, i) => (
        <Sphere
          key={i}
          position={[
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
          ]}
          scale={0.1}
        >
          <meshBasicMaterial color={new THREE.Color().setHSL(Math.random(), 0.8, 0.5)} />
        </Sphere>
      ))}
    </group>
  )
}

export function ThreeScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <Nodes />
        <EffectComposer>
          <Bloom luminanceThreshold={0.5} intensity={2} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}