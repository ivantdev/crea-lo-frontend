import { useFrame } from "@react-three/fiber"
import { interpolateColors } from '../utils'
import * as THREE from "three"
import { useControls } from "leva"

const BLUE = "#3f3fd1"
const RED = "#d184ac"
const GREEN = "#77a780"

const DynamicBackground = () => {
    // Lerp background color based on angle

    const { firstColor, secondColor, thirdColor } = useControls(
        {
            firstColor: { value: BLUE, label: "First Color" },
            secondColor: { value: RED, label: "Second Color" },
            thirdColor: { value: GREEN, label: "Third Color" },
        })

    useFrame(({ camera, scene }) => {

        const radian = Math.atan2(camera.position.x, camera.position.z)
        let angle = radian * (180 / Math.PI);
        if (angle < 0.0)
            angle += 360.0;

        // going from 0 to first angle (2PI/3)
        if (angle < 120) {
            const progress = angle / 120
            const color = interpolateColors(new THREE.Color(firstColor), new THREE.Color(secondColor), progress)

            scene.background = new THREE.Color(color)
            scene.fog.color = new THREE.Color(color)
            return
        }

        // going 2PI/3 to 4PI/3
        if (angle > 120 && angle < 240) {
            const progress = (angle - 120) / 120
            const color = interpolateColors(new THREE.Color(secondColor), new THREE.Color(thirdColor), progress)
            scene.background = new THREE.Color(color)
            scene.fog.color = new THREE.Color(color)
            return
        }

        // going 4PI/3 to 2PI
        if (angle > 240) {
            const progress = (angle - 240) / 120
            const color = interpolateColors(new THREE.Color(thirdColor), new THREE.Color(firstColor), progress)
            scene.background = new THREE.Color(color)
            scene.fog.color = new THREE.Color(color)
            return
        }
    })


}

export default DynamicBackground