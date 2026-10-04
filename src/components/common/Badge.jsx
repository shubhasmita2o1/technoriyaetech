import React from 'react';

export default function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
  dot = false,
  dotColor = 'bg-[#2563EB]',
}) {
  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-medium",
    md: "text-xs px-3 py-1 font-medium",
    lg: "text-sm px-4 py-1.5 font-medium",
  };

  const variantStyles = {
    neutral: "bg-[#E2E8F0] text-[#333742] border border-[#E2E8F0]",
    white: "bg-white text-[#0F172A] border border-[#E2E8F0] shadow-subtle",
    primary: "bg-[#F0F5FD] text-[#0B2046] border border-[#BFDCF8]",
    accent: "bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]",
    amber: "bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]",
    emerald: "bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full tracking-wide uppercase transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse`} />}
      {children}
    </span>
  );
}
