import * as THREE from "three"
import React, { useEffect, useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import TagDetail from "./TagDetail/TagDetail"
import { emitCustomEvent } from 'react-custom-events'

function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = { font: '/Inter-Bold.ttf', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    const click = (e) => (emitCustomEvent('closeAllDialog'), e.stopPropagation(), setOpenModal(true), emitCustomEvent('openDialog'))
    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion)
        // Animate font color
        ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
        // Animate font size
        ref.current.scale.lerp(new THREE.Vector3(1, 1, 1).multiplyScalar(hovered ? 1.2 : 1), 0.1)

    })

    return (
        <>
            <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={click} {...props} {...fontProps} children={children.attributes.name} />
            <TagDetail isOpen={openModal} setIsOpen={setOpenModal} tag={children.id} />
        </>
    )

}

export default Word

