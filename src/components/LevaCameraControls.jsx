import React, { useEffect } from "react"
import { useThree } from "@react-three/fiber"
import { useControls } from "leva"

const LevaCameraControls = () => {
    const { camera } = useThree()
    const { cameraPosition } = useControls({ cameraPosition: { x: 0, y: 5, z: 45 } })
    useEffect(() => {
        camera.position.x = cameraPosition.x
        camera.position.y = cameraPosition.y
        camera.position.z = cameraPosition.z
    }, [cameraPosition])
}

export default LevaCameraControls