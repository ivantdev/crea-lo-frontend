import { useState } from "react"
import { useFrame } from "@react-three/fiber"
import { interpolateColors } from '../utils'
import * as THREE from "three"
import { useControls } from "leva"
import { useCustomEventListener } from 'react-custom-events'

const BLUE = "#0000a0"
const RED = "#a30000"
const GREEN = "#00ba00"

const DynamicBackground = () => {
    const [someDialogIsOpen, setSomeDialogIsOpen] = useState(false)
    // Lerp background color based on angle
    const { firstColor, secondColor, thirdColor } = useControls(
        {
            firstColor: { value: BLUE, label: "First Color" },
            secondColor: { value: RED, label: "Second Color" },
            thirdColor: { value: GREEN, label: "Third Color" },
        })

    useCustomEventListener('openDialog', (e) => {
        setSomeDialogIsOpen(true)
    })

    useCustomEventListener('closeDialog', (e) => {
        setSomeDialogIsOpen(false)
    })

    const opacity = 0.3

    useFrame(({ camera, gl, scene }) => {
        if (someDialogIsOpen) {
            return
        }
        const radian = Math.atan2(camera.position.x, camera.position.z)
        let angle = radian * (180 / Math.PI);
        if (angle < 0.0)
            angle += 360.0;

        // going from 0 to first angle (2PI/3)
        if (angle < 120) {
            const progress = angle / 120
            const color = interpolateColors(new THREE.Color(firstColor), new THREE.Color(secondColor), progress)

            gl.setClearColor(new THREE.Color(color), opacity)
            scene.fog.color = new THREE.Color(color)
            return
        }

        // going 2PI/3 to 4PI/3
        if (angle > 120 && angle < 240) {
            const progress = (angle - 120) / 120
            const color = interpolateColors(new THREE.Color(secondColor), new THREE.Color(thirdColor), progress)
            gl.setClearColor(new THREE.Color(color), opacity)
            scene.fog.color = new THREE.Color(color)
            return
        }

        // going 4PI/3 to 2PI
        if (angle > 240) {
            const progress = (angle - 240) / 120
            const color = interpolateColors(new THREE.Color(thirdColor), new THREE.Color(firstColor), progress)
            gl.setClearColor(new THREE.Color(color), opacity)
            scene.fog.color = new THREE.Color(color)
            return
        }
    })
}

export default DynamicBackground