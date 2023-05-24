import React, { useMemo } from "react"
import * as THREE from "three"
import { CubicBezierLine } from "@react-three/drei"

// Ejemplo de uso del componente QuadraticBezierLine con una línea punteada
const MyComponent = ({ points, color }) => {
  const start = [
    points[0].x,
    points[0].y,
    points[0].z,
  ];
  const end = [
    points[1].x,
    points[1].y,
    points[1].z,
  ];
  const midA = [
    points[0].x + Math.random() * 5,
    points[0].y + Math.random() * 5,
    points[0].z + Math.random() * 5,
  ];
  const midB = [
    points[1].x - Math.random() * 5,
    points[1].y - Math.random() * 5,
    points[1].z - Math.random() * 5,
  ];
  const dashSize = 0.2; // Tamaño de cada segmento punteado
  const gapSize = 0.1; // Tamaño del espacio entre segmentos punteados

  return (
    <CubicBezierLine
      start={start}
      end={end}
      midA={midA}
      midB={midB}
      lineWidth={4}
      dashed={false} // No necesitamos que QuadraticBezierLine sea punteada
      color={color}
    />
  );
};

const generateColorInHexadecimal = () => {
  const r = Math.floor(Math.random() * 210 + 30)
  const g = Math.floor(Math.random() * 210 + 30)
  const b = Math.floor(Math.random() * 210 + 30)
  return "#" + r.toString(16) + g.toString(16) + b.toString(16)
}

const Connections = ({ count = 6, tags = [], radius = 20 }) => {

  const mapIdToVector3 = useMemo(() => {
    const temp = new Map()
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    let tagIndex = 0
    if (tags.length === 0) {
      return temp
    }
    for (let j = 0; j < count; j++)
      for (let i = 1; i < count + 1; i++) {
        temp.set(tags[tagIndex++ % tags.length].id, new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)))
      }
    return temp
  }, [tags])
  if (mapIdToVector3.size === 0) {
    return null
  }
  return tags.map((tag, index) => {
    const color = generateColorInHexadecimal()
    console.log("color antes de: ", color, typeof color)
    const points = []
    points.push(mapIdToVector3.get(tag.id))
    points.push(mapIdToVector3.get(tag.attributes.next.data.id))
    return <MyComponent dashed key={index} points={points} color={color} ></MyComponent>
  })
  // let color = [
  //   generateColorInHexadecimal(),
  //   generateColorInHexadecimal(),
  //   generateColorInHexadecimal(),
  // ]
  // let colorCounter = 0
  // return tags.map((tag, index) => {
  //   if (colorCounter === 9) {
  //     color = [
  //       generateColorInHexadecimal(),
  //       generateColorInHexadecimal(),
  //       generateColorInHexadecimal(),
  //     ]
  //     colorCounter = 0
  //   }
  //   colorCounter++
  //   const points = []
  //   points.push(mapIdToVector3.get(tag.id))
  //   points.push(mapIdToVector3.get(tag.attributes.next.data.id))
  //   return <MyComponent dashed key={index} points={points} color={color[colorCounter%3]} ></MyComponent>
  // })
}

export default Connections