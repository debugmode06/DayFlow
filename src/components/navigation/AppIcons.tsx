import React from 'react';

interface AppIconProps {
  appId: string;
  className?: string;
  size?: number;
}

export const DayflowAppIcon: React.FC<AppIconProps> = ({ appId, className = "w-10 h-10", size = 40 }) => {
  switch (appId) {
    case 'miraz':
      // Miraz: Project & software management - Agile sprint chevron layers in Dayflow blue
      return (
        <svg
          className={`${className} shrink-0 select-none`}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="10" fill="#2563FF" />
          <path
            d="M21.5 11.5L15.5 17.5C14.7 18.3 14.7 19.7 15.5 20.5L21.5 26.5C22.3 27.3 23.7 27.3 24.5 26.5L30.5 20.5C31.3 19.7 31.3 18.3 30.5 17.5L24.5 11.5C23.7 10.7 22.3 10.7 21.5 11.5Z"
            fill="white"
            fillOpacity="0.95"
          />
          <path
            d="M25.5 17L19.5 23C18.7 23.8 18.7 25.2 19.5 26L25.5 32C26.3 32.8 27.7 32.8 28.5 32L32.5 28C33.3 27.2 33.3 25.8 32.5 25L28.5 21L29.5 20C30.3 19.2 30.3 17.8 29.5 17C28.7 16.2 27.3 16.2 26.5 17L25.5 17Z"
            fill="white"
            fillOpacity="0.85"
          />
          <path
            d="M17 21L11.5 26.5C10.7 27.3 10.7 28.7 11.5 29.5L13.5 31.5C14.3 32.3 15.7 32.3 16.5 31.5L22 26C22.8 25.2 22.8 23.8 22 23L19.5 20.5C18.7 19.7 17.8 20.2 17 21Z"
            fill="white"
            fillOpacity="0.75"
          />
        </svg>
      );

    case 'vanta':
      // Vanta: Enterprise resource planning - Interconnected modern ERP cube vault
      return (
        <svg
          className={`${className} shrink-0 select-none`}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="10" fill="#0D9488" />
          <path
            d="M22 10L32 16V28L22 34L12 28V16L22 10Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M22 10V34M12 16L32 28M32 16L12 28"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />
          <circle cx="22" cy="22" r="3.5" fill="white" />
        </svg>
      );

    case 'relio':
      // Relio: Customer relationship management - Interlocking CRM nodes
      return (
        <svg
          className={`${className} shrink-0 select-none`}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="10" fill="#EA580C" />
          <circle cx="16" cy="18" r="4.5" fill="white" />
          <circle cx="28" cy="18" r="4.5" fill="white" />
          <circle cx="22" cy="29" r="4" fill="white" fillOpacity="0.9" />
          <path
            d="M16 18H28M16 18L22 29M28 18L22 29"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'huma':
      // Huma: Human resources and people operations - People silhouette & heartbeat
      return (
        <svg
          className={`${className} shrink-0 select-none`}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="10" fill="#8B5CF6" />
          <circle cx="22" cy="16" r="4.5" fill="white" />
          <path
            d="M14 31C14 26.5817 17.5817 23 22 23C26.4183 23 30 26.5817 30 31H14Z"
            fill="white"
          />
          <circle cx="31" cy="17" r="3" fill="white" fillOpacity="0.75" />
          <path
            d="M31 24C33.2091 24 35 25.7909 35 28V30H31V24Z"
            fill="white"
            fillOpacity="0.75"
          />
        </svg>
      );

    case 'prism':
      // Prism: Business intelligence and analytics - Multi-faceted analytics prism
      return (
        <svg
          className={`${className} shrink-0 select-none`}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="10" fill="#4F46E5" />
          <polygon points="22,10 33,31 11,31" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="22" y1="10" x2="22" y2="31" stroke="white" strokeWidth="2" strokeOpacity="0.8" />
          <line x1="22" y1="21" x2="33" y2="31" stroke="white" strokeWidth="1.8" strokeOpacity="0.8" />
          <line x1="22" y1="21" x2="11" y2="31" stroke="white" strokeWidth="1.8" strokeOpacity="0.8" />
          <circle cx="22" cy="21" r="2.5" fill="white" />
        </svg>
      );

    case 'assist':
      // Assist: Customer support & service desk - Support beacon & headset
      return (
        <svg
          className={`${className} shrink-0 select-none`}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="10" fill="#D97706" />
          <path
            d="M13 22C13 17.0294 17.0294 13 22 13C26.9706 13 31 17.0294 31 22V27C31 28.6569 29.6569 30 28 30H26V23H30V22C30 17.5817 26.4183 14 22 14C17.5817 14 14 17.5817 14 22V23H18V30H16C14.3431 30 13 28.6569 13 27V22Z"
            fill="white"
          />
          <circle cx="22" cy="29" r="2" fill="white" />
        </svg>
      );

    case 'payra':
      // Payra: Payroll and compensation - Secure financial flow shield
      return (
        <svg
          className={`${className} shrink-0 select-none`}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="10" fill="#16A34A" />
          <circle cx="22" cy="22" r="10" stroke="white" strokeWidth="2.2" />
          <path
            d="M18 20C18 18.3431 19.7909 17 22 17C24.2091 17 26 18.3431 26 20C26 21.6569 24 22.5 22 23C20 23.5 18 24.3431 18 26C18 27.6569 19.7909 29 22 29C24.2091 29 26 27.6569 26 26"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line x1="22" y1="15" x2="22" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'flowdesk':
      // Flowdesk: Workflow automation and approvals - Automation connect nodes
      return (
        <svg
          className={`${className} shrink-0 select-none`}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="10" fill="#0284C7" />
          <rect x="12" y="13" width="7" height="7" rx="2" fill="white" />
          <rect x="25" y="13" width="7" height="7" rx="2" fill="white" />
          <rect x="18.5" y="25" width="7" height="7" rx="2" fill="white" />
          <path
            d="M19 16.5H25M15.5 20V23.5H22V25M28.5 20V23.5H22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'zuno':
    default:
      // Zuno: AI-powered assistant - Distinctive AI sparkle emblem with brand blue
      return (
        <svg
          className={`${className} shrink-0 select-none`}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="10" fill="#0C66E4" />
          <path
            d="M22 10C22 16.6274 16.6274 22 10 22C16.6274 22 22 27.3726 22 34C22 27.3726 27.3726 22 34 22C27.3726 22 22 16.6274 22 10Z"
            fill="white"
          />
          <circle cx="31" cy="13" r="2.5" fill="white" fillOpacity="0.85" />
          <circle cx="13" cy="31" r="2" fill="white" fillOpacity="0.75" />
        </svg>
      );
  }
};
