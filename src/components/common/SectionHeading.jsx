import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left', // 'left' | 'center' | 'between'
  badgeDot = true,
  className = '',
  action = null,
  dark = false, // kept for safety, but default strictly light
}) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto items-center",
    between: "text-left md:flex md:items-end md:justify-between",
  }[align];

  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {align === 'between' ? (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#E5E5DC]">
          <div className="max-w-3xl">
            {eyebrow && (
              <div className="mb-3">
                <Badge dot={badgeDot}>{eyebrow}</Badge>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0E1116] leading-[1.08] uppercase font-display">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-[#4A4E5A] leading-relaxed max-w-2xl font-normal">
                {subtitle}
              </p>
            )}
          </div>
          {action && <div className="flex-shrink-0 mb-1">{action}</div>}
        </div>
      ) : (
        <div className={`flex flex-col ${alignClass} max-w-4xl`}>
          {eyebrow && (
            <div className="mb-3.5">
              <Badge dot={badgeDot}>{eyebrow}</Badge>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0E1116] leading-[1.08] uppercase font-display">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-[#4A4E5A] leading-relaxed max-w-2xl font-normal">
              {subtitle}
            </p>
          )}
          {action && <div className="mt-6">{action}</div>}
        </div>
      )}
    </div>
  );
}
