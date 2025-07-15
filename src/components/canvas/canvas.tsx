import { Canvas } from "@react-three/fiber";
import { ReactNode, useState } from "react";
import Porsche from "../porsche/porsche";
import { AccumulativeShadows, Environment, RandomizedLight } from "@react-three/drei";
import EnvironmentLight from "../light/environmentLight";
import Camera from "../camera/camera";
import ColorPicker from "../color-picker/color-picker";

export default function CanvasPorsche(){

    const [isDegraded, setIsDegraded]=useState<boolean>(true)

    return(
        <Canvas style={{width:"100%",height:"100vh"}} shadows camera={{ position: [0, 50, 0], fov: 30 }}>
            <spotLight position={[0,30,0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001}></spotLight>
            <ambientLight intensity={0.5}></ambientLight>
            <Porsche scale={1.6} position={[-0.5, -0.18, 0]} rotation={[0, Math.PI / 5, 0]} />
            <AccumulativeShadows position={[0,-1.16,0]} frames={100} alphaTest={0.8} scale={10}>
                <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1,5,-1]}></RandomizedLight>
            </AccumulativeShadows>
            <Environment frames={isDegraded ? 1 : Infinity} resolution={256} background blur={1}>
                <EnvironmentLight></EnvironmentLight>
            </Environment>
            <Camera/>
        </Canvas>
    )
}