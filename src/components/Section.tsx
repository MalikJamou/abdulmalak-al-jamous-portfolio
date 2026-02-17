import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dir?: 'ltr' | 'rtl';
}

export default function Section({ title, subtitle, children, className = '', dir = 'ltr' }: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      {title && (
        <div className={`mb-12 ${dir === 'rtl' ? 'text-right' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-slate-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
