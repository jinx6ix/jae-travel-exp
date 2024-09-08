'use client'
import React, { useState } from 'react';
import styles from './index.module.scss';
import FloatingActionButton from '../FloatingActionButton';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ChatInterface from '../../ChatInterface';

const ExpandableFloatingActionButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showChatInterface, setShowChatInterface] = useState(false);

  const handleButtonClick = () => {
    setShowChatInterface(prevState => !prevState); // Toggle the chat interface visibility
  };

  const handleCloseChat = () => {
    setShowChatInterface(false); // Function to close the chat interface
  };

  return (
    <>
      <div>
        {showChatInterface ? <ChatInterface onClose={handleCloseChat} /> : null}
      </div>
      <div className={styles.container}>
        <div className={`${styles.fabContainer} ${isExpanded ? styles.fabContainerExpanded : ''}`}>
          <FloatingActionButton
            icon={showChatInterface ? <FaMinus /> : <FaPlus />} // Change icon based on chat state
            color="#2196F3"
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </>
  );
};

export default ExpandableFloatingActionButton;
