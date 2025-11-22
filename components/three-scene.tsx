"use client"

import { useRef, useMemo } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function MeshGlobe() {
  const { size } = useThree()
  const radius = useMemo(() => {
    if (size.width < 640) return 2.6
    if (size.width < 1024) return 3.6
    return 4.4
  }, [size.width])

  return (
    <Sphere args={[radius, 48, 48]}>
      <meshBasicMaterial color="#22d3ee" wireframe opacity={0.65} transparent />
    </Sphere>
  )
}

function WireframeIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3

      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.03
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshBasicMaterial color="#22d3ee" wireframe opacity={0.6} transparent side={THREE.DoubleSide} />
    </mesh>
  )
}

export function HeroIcosahedron() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <WireframeIcosahedron />
    </Canvas>
  )
}

export function ContactGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 13], fov: 45 }}
      className="w-full h-[108vh] min-h-[620px] max-h-[1080px] translate-y-12 sm:translate-y-16 lg:translate-y-20"
    >
      <ambientLight intensity={0.75} />
      <MeshGlobe />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
