import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import { useEffect, useLayoutEffect } from "react";
import { PorscheProps } from "../../constants/porscheProps";
import * as THREE from "three"
import colorStateStore from "../../store/store";

export default function Porsche(props:PorscheProps){
    const {nodes,materials,scene}=useGLTF('/911-transformed.glb');
    const {color}=colorStateStore();

    useEffect(()=>{
        Object.values(nodes).filter((node):node is THREE.Mesh=>node instanceof THREE.Mesh).forEach((node) => {
                node.receiveShadow = true;
                node.castShadow = true;
        })
        applyProps(materials.rubber, { color: '#222', roughness: 0.6, roughnessMap: null, normalScale: [4, 4] })
        applyProps(materials.window, { color: 'black', roughness: 0, clearcoat: 0.1 })
        applyProps(materials.coat, { envMapIntensity: 4, roughness: 0.5, metalness: 0.1, color: "#444" })
        applyProps(materials.paint, { envMapIntensity: 2, roughness: 0.45, metalness: 0.1, color: color })
    },[nodes,materials,color])

    return <primitive object={scene} {...props}/>
}