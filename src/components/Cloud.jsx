import React, { useMemo } from "react"
import * as THREE from "three"
import Word from "./Word"
import { useFrame } from "@react-three/fiber"
import { interpolateColors } from "../utils"
const BLUE = 0x1a1a40
const RED = 0x4c0027
const GREEN = 0x1e5128

function Cloud({ count = 6, radius = 20, tags = [] }) {
    // Create a count x count random words with cylindrical distribution
    const words = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        let tagIndex = 0
        if (tags.length === 0) {
            return temp
        }
        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), tags[tagIndex++ % tags.length].attributes.name])
        return temp
    }, [count, radius, tags])

    // Lerp background color based on angle
    useFrame(({ camera, scene }) => {


        const radian = Math.atan2(camera.position.x, camera.position.z)
        let angle = radian * (180 / Math.PI);
        if (angle < 0.0)
            angle += 360.0;

        // going from 0 to first angle (2PI/3)
        if (angle < 120) {
            const progress = angle / 120
            const color = interpolateColors(new THREE.Color(BLUE), new THREE.Color(RED), progress)

            scene.background = new THREE.Color(color)
            scene.fog.color = new THREE.Color(color)
            return
        }

        // going 2PI/3 to 4PI/3
        if (angle > 120 && angle < 240) {
            const progress = (angle - 120) / 120
            const color = interpolateColors(new THREE.Color(RED), new THREE.Color(GREEN), progress)
            scene.background = new THREE.Color(color)
            scene.fog.color = new THREE.Color(color)
            return
        }

        // going 4PI/3 to 2PI
        if (angle > 240) {
            const progress = (angle - 240) / 120
            const color = interpolateColors(new THREE.Color(GREEN), new THREE.Color(BLUE), progress)
            scene.background = new THREE.Color(color)
            scene.fog.color = new THREE.Color(color)
            return
        }
    })



    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default Cloud