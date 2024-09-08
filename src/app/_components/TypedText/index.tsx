'use client'
import React, { useEffect, useRef, useState } from 'react';
import './TypedText.module.scss';

interface TypeWriterProps {
  words: string[];
  wait?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  words,
  wait = 200,
  typeSpeed = 100,
  deleteSpeed = 10,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleType = () => {
      const current = currentWordIndex % words.length;
      const fullText = words[current];

      if (isDeleting) {
        setCurrentText((prevText) => {
          if (prevText.length === 1) {
            return prevText; // Stop deleting if only one character is left
          }
          return prevText.substring(0, prevText.length - 1);
        });
      } else {
        setCurrentText((prevText) => fullText.substring(0, prevText.length + 1));
      }

      let speed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && currentText === fullText) {
        speed = wait;
        setIsDeleting(true);
      } else if (isDeleting && currentText.length === 1) {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        speed = 500;
      }

      timeoutRef.current = setTimeout(handleType, speed);
    };

    timeoutRef.current = setTimeout(handleType, wait);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentWordIndex, currentText, isDeleting, words, wait, typeSpeed, deleteSpeed]);

  return (
    <span className="txt-type">
      {currentText}
      <span className="cursor" />
    </span>
  );
};

export default TypeWriter;