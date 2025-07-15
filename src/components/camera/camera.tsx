import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function Camera({v=new THREE.Vector3()}){
    return useFrame((state)=>{
        const t=state.clock.elapsedTime;
        state.camera.position.lerp(v.set(Math.sin(t / 4), 0, 7.5 + Math.cos(t / 4) / 2), 0.05)
        state.camera.lookAt(0, 0, 0);
    })
}