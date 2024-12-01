"use client";

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { motion } from "framer-motion";

export default function Experience() {
    const sphere = useRef();

    const messages = ["Kent Daniel", "李鴻根"];
    const [displayedText, setDisplayedText] = useState(".");
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [typingIndex, setTypingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedText((prev) =>
                prev + messages[currentMessageIndex][typingIndex]
            );
            setTypingIndex((prev) => prev + 1);
        }, 150);

        if (typingIndex === messages[currentMessageIndex]?.length) {
            clearInterval(interval);
            setTimeout(() => {
                setTypingIndex(0);
                setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
                setDisplayedText(".");
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [typingIndex, currentMessageIndex, messages]);

    return (
        <>
            <Canvas className="w-full h-screen">
                <directionalLight position={[1, 2, 3]} intensity={4.5} />
                <ambientLight intensity={1.5} />

                <mesh ref={sphere} position={[-4.5, 5, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </Canvas>

            <div className="absolute top-5 left-5">
                <div className="font-bangers text-yellow-500 text-2xl">
                    {displayedText}
                </div>
            </div>
        </>
    );
}
