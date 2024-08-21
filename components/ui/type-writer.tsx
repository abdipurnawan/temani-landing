/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useState, useEffect } from 'react';

interface Word {
  text: string;
  className?: string;
}

interface Phrase {
  words: Word[];
}

interface TypewriterProps {
  phrases: Phrase[];
  delay?: number;
  pauseDelay?: number;
  className?: string;
  defaultClassName?: string;
}

const TypeWriter: React.FC<TypewriterProps> = ({
  phrases,
  delay = 100,
  pauseDelay = 2000,
  className = '',
  defaultClassName = ''
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex].words.map(word => word.text).join(' ');
    
    if (!isDeleting && currentText === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDelay);
      return () => clearTimeout(timeout);
    }
    
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : currentPhrase.slice(0, prev.length + 1)
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, delay, pauseDelay]);

  const renderText = () => {
    const currentPhrase = phrases[currentPhraseIndex].words;
    let renderedText = '';
    let wordIndex = 0;

    return currentPhrase.map((word, index) => {
      const start = renderedText.length;
      renderedText += (index > 0 ? ' ' : '') + word.text;
      const end = renderedText.length;
      const isPartiallyTyped = start < currentText.length && end > currentText.length;
      const isFullyTyped = end <= currentText.length;

      if (!isFullyTyped && !isPartiallyTyped) {
        return null;
      }

      return (
        <span key={index} className={word.className || defaultClassName}>
          {isPartiallyTyped
            ? currentText.slice(start, currentText.length)
            : word.text}
          {index < currentPhrase.length - 1 && isFullyTyped ? ' ' : ''}
        </span>
      );
    });
  };

  return (
    <div className={`${className}`}>
      {renderText()}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypeWriter;