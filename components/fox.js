import {useAnimations, useGLTF } from "@react-three/drei";
import { Scene } from "three";
import { use, useEffect } from "react";
import { useControls } from "leva";
export default function Fox() {
  const fox = useGLTF("./Fox/glTF/Fox.gltf");
  const animations = useAnimations(fox.animations, fox.scene)  
  useEffect(() =>
    {
        const action = animations.actions.Run
        action.play()

        // window.setTimeout(() =>
        // {
        //     animations.actions.Walk.play()
        //     animations.actions.Walk.crossFadeFrom(animations.actions.Run,1)
        // }, 2000)
    }, [])


  return <primitive 
  object={fox.scene}
  scale= {0.025}
  position={[0,-1, 2.5]}
  // MAKE IT SIDEWAYS
    rotation={[0, Math.PI / 2, 0]}
  />
}