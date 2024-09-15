import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const words = ["Business", "مشروع", "Projet", "Unternehmen"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const updatedText = isDeleting
        ? currentWord.slice(0, displayedText.length - 1)
        : currentWord.slice(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }

      const speed = isDeleting ? 75 : 150;
      setTypingSpeed(speed);
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, typingSpeed, words, currentWordIndex]);

  return (
    <span className="border-r-2 border-gray-900 pr-1">
      {displayedText}
    </span>
  );
};

export default TypingAnimation;

