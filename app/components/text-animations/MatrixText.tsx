"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/app/lib/utils/utils";

interface LetterState {
    char: string;
    isMatrix: boolean;
    isSpace: boolean;
    isRevealed: boolean;
}

interface MatrixTextProps {
    text?: string;
    className?: string;
    initialDelay?: number;
    letterAnimationDuration?: number;
    letterInterval?: number;
}

export const MatrixText = ({
    text = "HelloWorld!",
    className,
    initialDelay = 200,
    letterAnimationDuration = 500,
    letterInterval = 100,
}: MatrixTextProps) => {
    const [letters, setLetters] = useState<LetterState[]>(() =>
        text.split("").map((char) => ({
            char: "",
            isMatrix: true,
            isSpace: char === " ",
            isRevealed: false,
        }))
    );

    const matrixChars = "!@#$%^&*()_+-=[]{}|;:,.<>?1234567890";
    const getRandomChar = useCallback(
        () => matrixChars[Math.floor(Math.random() * matrixChars.length)],
        []
    );

    const scrambleText = useCallback(() => {
        setLetters((prev) =>
            prev.map((letter) => ({
                ...letter,
                char: letter.isSpace ? " " : getRandomChar(),
            }))
        );
    }, [getRandomChar]);

    useEffect(() => {
        let scrambleInterval: NodeJS.Timeout;
        let revealTimeout: NodeJS.Timeout;

        const startAnimation = () => {
            // First phase: rapid matrix character changes
            scrambleInterval = setInterval(scrambleText, 50);

            // Second phase: reveal actual text one by one
            revealTimeout = setTimeout(() => {
                clearInterval(scrambleInterval);
                
                text.split("").forEach((char, index) => {
                    setTimeout(() => {
                        setLetters((prev) => {
                            const newLetters = [...prev];
                            newLetters[index] = {
                                char,
                                isMatrix: false,
                                isSpace: char === " ",
                                isRevealed: true,
                            };
                            return newLetters;
                        });
                    }, index * letterInterval);
                });
            }, letterAnimationDuration);
        };

        const timer = setTimeout(startAnimation, initialDelay);

        return () => {
            clearTimeout(timer);
            clearInterval(scrambleInterval);
            clearTimeout(revealTimeout);
        };
    }, [text, initialDelay, letterAnimationDuration, letterInterval, scrambleText]);

    return (
        <div className={cn("flex items-center justify-center", className)}>
            <div className="flex flex-wrap items-center justify-center">
                {letters.map((letter, index) => (
                    <motion.div
                        key={`${index}-${letter.char}`}
                        className={cn(
                            "font-mono text-4xl md:text-6xl w-[1ch] text-center",
                            letter.isMatrix ? "text-green-500" : "text-white",
                            letter.isRevealed && "text-shadow-glow"
                        )}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.1,
                            ease: "easeInOut",
                        }}
                    >
                        {letter.isSpace ? "\u00A0" : letter.char}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MatrixText;
