import React from 'react';
import dayflowLogoMaster from '../assets/dayflow-logo-transparent.png';
import dayflowIconMaster from '../assets/dayflow-icon.jpeg';

export interface DayflowLogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon' | 'dark' | 'app-icon';
  width?: number | string;
  height?: number | string;
  showTagline?: boolean;
  className?: string;
  alt?: string;
  idPrefix?: string;
}

/**
 * Standalone Dayflow Official Icon (from original master project asset)
 */
export const DayflowIcon: React.FC<{
  className?: string;
  size?: number | string;
  alt?: string;
  idPrefix?: string;
}> = ({ className = "w-9 h-9 sm:w-10 sm:h-10", size, alt = "Dayflow icon" }) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <img
      src={dayflowIconMaster}
      alt={alt}
      className={`rounded-lg object-contain select-none inline-block ${className}`}
      style={style}
      loading="eager"
    />
  );
};

/**
 * Complete Official Dayflow Logo (Horizontal Master Asset)
 * Uses the exact original 1600x533 transparent PNG file supplied in src/assets/dayflow-logo-transparent.png
 * Contains the authentic abstract D symbol, cyan dot, arrow motif, dark navy/blue wordmark, and "MAKE WORK FLOW" tagline.
 */
export const DayflowLogo: React.FC<DayflowLogoProps> = ({
  variant = 'horizontal',
  className = '',
  alt = 'Dayflow — Make Work Flow'
}) => {
  if (variant === 'icon' || variant === 'app-icon') {
    return (
      <img
        src={dayflowIconMaster}
        alt={alt}
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-contain select-none ${className}`}
        loading="eager"
      />
    );
  }

  // Exact original master asset: complete horizontal logo with original icon, wordmark, and tagline
  const hasCustomHeight = className.includes('h-');
  const sizeClasses = hasCustomHeight
    ? className
    : `h-10 sm:h-11 md:h-12 lg:h-[3.5rem] w-auto max-w-[260px] sm:max-w-[300px] md:max-w-[360px] ${className}`;

  return (
    <img
      src={dayflowLogoMaster}
      alt={alt}
      className={`${sizeClasses} object-contain select-none transition-transform`}
      loading="eager"
    />
  );
};

export default DayflowLogo;
