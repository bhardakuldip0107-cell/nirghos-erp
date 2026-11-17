import React from 'react';
import * as LucideIcons from 'lucide-react';

/**
 * DynamicIcon safely maps string icon names to Lucide React components.
 * Falls back to Boxes, Package, or inline SVG if icon is not found or invalid.
 */
export const DynamicIcon = ({ name, className = "w-5 h-5", ...props }) => {
  if (!name) {
    const Fallback = LucideIcons.Boxes || LucideIcons.Package;
    if (Fallback) return <Fallback className={className} {...props} />;
    return <DefaultSvg className={className} {...props} />;
  }

  const IconComponent = LucideIcons[name] || LucideIcons.Boxes || LucideIcons.Package;
  
  if (typeof IconComponent === 'function' || (typeof IconComponent === 'object' && IconComponent !== null)) {
    return <IconComponent className={className} {...props} />;
  }

  return <DefaultSvg className={className} {...props} />;
};

const DefaultSvg = ({ className, ...props }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

export default DynamicIcon;
