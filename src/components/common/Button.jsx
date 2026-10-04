import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = true,
  iconType = 'diagonal', // 'diagonal' | 'straight'
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B2046] disabled:opacity-50 disabled:pointer-events-none group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
    xl: "text-lg px-8 py-4 gap-3",
  };

  const variantStyles = {
    primary: "bg-[#0B2046] hover:bg-[#153468] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-white hover:bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] hover:border-[#B8B8A8] shadow-subtle hover:-translate-y-0.5 active:translate-y-0",
    accent: "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
    ghost: "bg-transparent hover:bg-[#E2E8F0]/60 text-[#0F172A] hover:text-[#0B2046]",
    outline: "bg-transparent border border-[#E2E8F0] hover:border-[#0B2046] text-[#0F172A] hover:bg-white",
  };

  const IconComponent = iconType === 'diagonal' ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <IconComponent className={size === 'sm' ? "w-3.5 h-3.5" : size === 'lg' ? "w-5 h-5" : "w-4 h-4"} />
        </span>
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
