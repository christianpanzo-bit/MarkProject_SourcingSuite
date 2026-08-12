import React from 'react';
import { getCountryShape } from '../data/countryShapes';

interface CountryShapeSvgProps {
  countryCode: string;
  countryName?: string;
  className?: string;
  fillColor?: string;
  strokeColor?: string;
  showBorder?: boolean;
}

export const CountryShapeSvg: React.FC<CountryShapeSvgProps> = ({
  countryCode,
  countryName,
  className = 'w-16 h-16',
  fillColor = '#6366f1',
  strokeColor = '#818cf8',
  showBorder = true,
}) => {
  const shape = getCountryShape(countryCode);

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox={shape.viewBox}
        className="w-full h-full filter drop-shadow-md transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id={`shape-grad-${countryCode}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={fillColor} stopOpacity="0.9" />
            <stop offset="100%" stopColor={fillColor} stopOpacity="0.5" />
          </linearGradient>
        </defs>

        <path
          d={shape.path}
          fill={`url(#shape-grad-${countryCode})`}
          stroke={showBorder ? strokeColor : 'transparent'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {countryName && (
        <span className="sr-only">{countryName} shape</span>
      )}
    </div>
  );
};
