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

    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default Cylinder