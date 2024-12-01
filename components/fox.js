import { useRef, useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

export default function Fox() {
    const fox = useRef();
    const { nodes, materials, animations } = useGLTF('./Fox/glTF/Fox.gltf');
    const { actions } = useAnimations(animations, fox);

    useEffect(() => {
        const action = actions.Run;
        action.play();
        
        return () => {
            if (action) {
                action.stop();
            }
        };
    }, [actions]);

  return <primitive 
  object={fox.current}
  scale= {0.025}
  position={[0,-1, 2.5]}
  // MAKE IT SIDEWAYS
    rotation={[0, Math.PI / 2, 0]}
  />
}