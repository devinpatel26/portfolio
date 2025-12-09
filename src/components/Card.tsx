
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  isGlass?: boolean;
  hasShimmer?: boolean;
}

const Card = ({ 
  children, 
  className = '', 
  isGlass = true,
  hasShimmer = false
}: CardProps) => {
  return (
    <div 
      className={`
        rounded-xl p-6 transition-all duration-300 hover:shadow-lg
        ${isGlass ? 'glass' : 'bg-background'} 
        ${hasShimmer ? 'shimmer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
