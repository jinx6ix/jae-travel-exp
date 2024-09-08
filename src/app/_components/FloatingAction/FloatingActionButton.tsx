import React from 'react';
import styles from './index.module.scss';

interface FloatingActionButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  color?: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  onClick,
  color = '#4CAF50',
}) => {
  return (
    <button
      className={styles.floatingActionButton}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default FloatingActionButton;