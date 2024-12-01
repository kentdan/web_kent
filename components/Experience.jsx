"use client";

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame,useThree} from '@react-three/fiber';
import { Text,MeshReflectorMaterial,useGLTF } from '@react-three/drei';
import Fox from './fox';


export default function Experience() {
    const sphere = useRef();

    const messages = useMemo(() => ["Kent Daniel", "李鴻根"], []);
    const [displayedText, setDisplayedText] = useState(".");
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [typingIndex, setTypingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (typingIndex < messages[currentMessageIndex]?.length) {
                setDisplayedText((prev) =>
                    prev + messages[currentMessageIndex][typingIndex]
                );
                setTypingIndex((prev) => prev + 1);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setTypingIndex(0);
                    setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
                    setDisplayedText(".");
                }, 1000);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [typingIndex, currentMessageIndex, messages]);

    return (
        <>
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <mesh ref={sphere} position={[-4.5, 4.5, 0]} scale={0.8}>
                <sphereGeometry args={[1, 32, 32] } />
                <meshStandardMaterial color="#19A7CE" />
            </mesh>
            <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 30}>
            <planeGeometry />
            <meshStandardMaterial color="" />
            </mesh>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={1.5}
                color="yellow"
                position={[0, 4.5, 0]}
                maxWidth={100}
                textAlign="center"
            >
                {displayedText}
            </Text>
         
            <Fox/>

            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={0.8}
                color="#FAFFAF"
                position={[0, 0.8, 0]}
                maxWidth={4}
                textAlign="center"
            >
                Developer,    AI Engineer   & Writter
            </Text>
        
        </>
    );
}
