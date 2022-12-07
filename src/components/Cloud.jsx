import React, { useMemo } from "react"
import * as THREE from "three"
import Word from "./Word"

function Cloud({ count = 6, radius = 20, tags = [] }) {
    // Creates a cloud of count tags with spherical distribution
    const countSquared = Math.round(Math.sqrt(count))
    const words = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (countSquared + 1)
        const thetaSpan = (Math.PI * 2) / countSquared
        let tagIndex = 0
        if (tags.length === 0) {
            return temp
        }
        for (let i = 1; i < countSquared + 1; i++)
            for (let j = 0; j < countSquared; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), tags[tagIndex++ % tags.length].attributes.name])
        return temp
    }, [count, radius, tags])

    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default Cloud