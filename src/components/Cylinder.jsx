import React, { useMemo } from "react"
import * as THREE from "three"
import Word from "./Word"
import { useFrame } from "@react-three/fiber"
import { interpolateColors } from "../utils"

const BLUE = 0x005af7
const RED = 0xF06F5B
const GREEN = 0xB8F02B

function Cylinder({ height = 4, radius = 20, columns = 4, numOfWordsByColumn = 0 }) {
    // Create a count x count random words with cylindrical distribution
    const words = useMemo(() => {
        const temp = []
        const cylindrical = new THREE.Cylindrical()
        const thetaSpan = (Math.PI * 2) / columns
        const heightSpan = height / numOfWordsByColumn
        for (let i = 1; i < columns + 1; i++)
            for (let j = 0; j < numOfWordsByColumn; j++) temp.push([new THREE.Vector3().setFromCylindrical(cylindrical.set(radius, thetaSpan * i, j * heightSpan)), "Hola"])
        return temp
    }, [height, radius, columns, numOfWordsByColumn])

    // Lerp background color based on angle
    useFrame(({ camera, scene }) => {


        const radian = Math.atan2(camera.position.x, camera.position.z)
        let angle = radian * (180 / Math.PI);
        if (angle < 0.0)
            angle += 360.0;
        console.log(angle)

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

export default Cylinder