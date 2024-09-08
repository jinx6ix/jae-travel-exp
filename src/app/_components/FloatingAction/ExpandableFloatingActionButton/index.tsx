'use client'
import React, { useState } from 'react';
import styles from './index.module.scss';
import FloatingActionButton from '../FloatingActionButton';
import { FaPhone, FaCommentDots, FaWhatsapp, FaPlus, FaMinus } from 'react-icons/fa';

const ExpandableFloatingActionButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleWhatsAppClick = () => {
    // Replace 'whatsappphonenumber' with the actual phone number
    const phoneNumber = '0795820643';
    // Open WhatsApp with the specified phone number
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.fabContainer} ${
          isExpanded ? styles.fabContainerExpanded : ''
        }`}
      >
        {isExpanded && (
          <>
            <FloatingActionButton
              icon={<FaPhone />}
              color="#E91E63"
              onClick={() => console.log('Phone button clicked')}
            />
            <FloatingActionButton
              icon={<FaCommentDots />}
              color="#9C27B0"
              onClick={() => console.log('Messaging button clicked')}
            />
            <FloatingActionButton
              icon={<FaWhatsapp />}
              color="#4CAF50"
              onClick={handleWhatsAppClick}
            />
          </>
        )}
        <FloatingActionButton
          icon={isExpanded ? <FaMinus /> : <FaPlus />}
          color="#2196F3"
          onClick={toggleExpanded}
        />
      </div>
    </div>
  );
};

export default ExpandableFloatingActionButton;