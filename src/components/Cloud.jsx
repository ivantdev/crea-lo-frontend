import React, { useMemo } from "react"
import * as THREE from "three"
import Word from "./Word"

function Cloud({ count = 6, radius = 20, tags = [] }) {
    // Creates a cloud of count x count tags with spherical distribution
    const words = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        let tagIndex = 0
        if (tags.length === 0) {
            return temp
        }
        for (let j = 0; j < count; j++) {
            for (let i = 1; i < count + 1; i++) {
                temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), tags[tagIndex++]])
            }
        }

        return temp
    }, [count, radius, tags])

    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default Cloud