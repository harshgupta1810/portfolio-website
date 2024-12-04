// Example modification: Moving client-specific logic to `useEffect`
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null; // You can return a loading state here if needed
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
