import React from 'react'
import { Center, Text3D, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'

function Scene({ margin = 0.5 }) {
    const { secondaryTextPosition, bevelSize, bevelThickness, height, rotation } = useControls({
        secondaryTextPosition: { value: { x: 0, y: -1, z: 0.4 }, step: 0.01 },
        bevelSize: { value: 0.04, step: 0.01 },
        bevelThickness: { value: 0.1, step: 0.01 },
        height: { value: 0.2, step: 0.01 },
        rotation: { value: [-0.2, -0.25, 0], step: 0.01 }
    })
    const textRef = React.useRef()

    const mouse = { x: 0, y: 0 }
    React.useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX / window.innerWidth * 2 - 1
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
        })

        return () => document.removeEventListener('mousemove', () => { })
    }, [])


    const cameraPos = new THREE.Vector3(mouse.x * 20, mouse.y * 20, Math.abs(mouse.x) * 20 + 3)
    useFrame(({ clock, camera }) => {
        // change the z component of rotation in a sine wave ranging from -0.4 to 0.4
        const elapsedTime = clock.getElapsedTime()
        textRef.current.rotation.z = Math.sin(elapsedTime * 0.7) * 0.4

        // change camera position based on mouse position
        camera.position.lerp(cameraPos.set(mouse.x * 10, mouse.y * 10, Math.abs(mouse.x) * 10 + 3), 0.1)



    })
    return (
        <group rotation={rotation} ref={textRef}>
            <Center>
                <Text3D
                    curveSegments={32}
                    bevelEnabled
                    bevelSize={0.04}
                    bevelThickness={0.1}
                    height={0.5}
                    lineHeight={0.5}
                    letterSpacing={-0.06}
                    size={1.5}
                    font="/Inter_Bold.json">
                    {`Crealo\n`}
                    <meshNormalMaterial />
                </Text3D>
            </Center>
            <Center bottom position={[secondaryTextPosition.x, secondaryTextPosition.y, secondaryTextPosition.z]} >
                <Text3D
                    curveSegments={32}
                    bevelEnabled
                    bevelSize={bevelSize}
                    bevelThickness={bevelThickness}
                    height={height}
                    lineHeight={0.5}
                    letterSpacing={0}
                    size={0.5}
                    font="/Inter_Bold.json">
                    {`Otros mundos posibles en la UN\n`}
                    <meshNormalMaterial />
                </Text3D>
            </Center>
        </group>

    )
}

const HomeScreen = () => {
    return (
        <div id="canvas-container">
            <Canvas camera={{ position: [0, 0, 7] }}>
                {/* <axesHelper args={[60]} /> */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} />
                <OrbitControls enableZoom={false} enablePan={false} />
                <Scene />
            </Canvas>
        </div>
    )
}

export default HomeScreen