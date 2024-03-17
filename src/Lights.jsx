import { useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from 'three'
import useGame from "./stores/useGame";
import { useThree } from "@react-three/fiber";

export default function Lights(){

    const directionalLightRef = useRef()
    const level = useGame(state => state.level)

    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1)
    useThree((state) => {
        state.scene.traverse(e => {
            if(e.type === 'Line'){
                console.log(e.material)
                e.material.visible = false
            }
        })
    })

    useEffect(() => {
        directionalLightRef.current.position.x = 10 + (25 * (level - 3)) 
        directionalLightRef.current.target.position.x = 0 + (25 * (level -3))
    }, [level])

    return (
        <>
            <directionalLight 
                castShadow
                position={[0, 10, 10]}
                intensity={2.5}
                shadow-mapSize={[4096, 4096]}
                shadow-camera-near={10}
                shadow-camera-far={50}
                shadow-camera-top={50}
                shadow-camera-right={20}
                shadow-camera-bottom={-50}
                shadow-camera-left={-20}
                ref={directionalLightRef}
            />
            <ambientLight intensity={1.5}/>
        </>
    )
}