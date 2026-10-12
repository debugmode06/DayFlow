import React from 'react';

// Atlassian stylized 'A' logo (two sails)
export const AtlassianLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.62 18.23C13.88 17.2 13.06 15.68 12.87 14.34C11.36 17.5 10.42 21.05 10.15 24.78H18.79C17.76 22.08 16.23 19.86 14.62 18.23Z"
      fill="currentColor"
    />
    <path
      d="M17.38 7.22C17.03 8.35 17.05 9.77 17.57 11.23C18.77 14.6 21.05 18.06 21.85 24.78H26C25.4 16.92 21.93 10.45 17.38 7.22Z"
      fill="currentColor"
    />
  </svg>
);

// Jira Product Logo (dual angled chevron layers)
export const JiraLogo: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#0052CC" />
    <path
      d="M15.9 8.2L11.5 12.6C10.7 13.4 10.7 14.7 11.5 15.5L15.9 19.9C16.7 20.7 18 20.7 18.8 19.9L23.2 15.5C24 14.7 24 13.4 23.2 12.6L18.8 8.2C18 7.4 16.7 7.4 15.9 8.2Z"
      fill="white"
      fillOpacity="0.8"
    />
    <path
      d="M19.6 12L15.2 16.4C14.4 17.2 14.4 18.5 15.2 19.3L19.6 23.7C20.4 24.5 21.7 24.5 22.5 23.7L24.5 21.7C25.3 20.9 25.3 19.6 24.5 18.8L21.7 16L22.5 15.2C23.3 14.4 23.3 13.1 22.5 12.3L21.4 11.2C20.9 10.7 20.1 11.5 19.6 12Z"
      fill="white"
    />
    <path
      d="M12.4 15.5L8 19.9C7.2 20.7 7.2 22 8 22.8L9.8 24.6C10.6 25.4 11.9 25.4 12.7 24.6L17.1 20.2C17.9 19.4 17.9 18.1 17.1 17.3L15.3 15.5C14.5 14.7 13.2 14.7 12.4 15.5Z"
      fill="white"
      fillOpacity="0.9"
    />
  </svg>
);

// Customer Logos from Screenshot 1
export const DatabricksLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`flex items-center gap-1.5 font-bold text-slate-800 tracking-tight ${className}`}>
    <svg className="w-5 h-5 text-slate-800 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3 7L12 12L21 7L12 2Z" fillOpacity="0.4" />
      <path d="M3 12L12 17L21 12L12 7L3 12Z" fillOpacity="0.7" />
      <path d="M3 17L12 22L21 17L12 12L3 17Z" />
    </svg>
    <span className="text-base tracking-tighter lowercase font-extrabold">databricks</span>
  </div>
);

export const CanvaLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <span className={`font-serif italic font-extrabold text-xl tracking-wide text-slate-800 ${className}`} style={{ fontFamily: 'Georgia, serif' }}>
    Canva
  </span>
);

export const RedditLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`flex items-center gap-1.5 text-slate-900 font-bold ${className}`}>
    <svg className="w-5 h-5 text-slate-900 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
      <circle cx="9" cy="11" r="1.5" fill="white" />
      <circle cx="15" cy="11" r="1.5" fill="white" />
      <path d="M8 15C9.5 16.5 14.5 16.5 16 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
    <span className="text-lg tracking-tight font-black lowercase">reddit</span>
  </div>
);

export const CiscoLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex flex-col items-center justify-center text-slate-800 ${className}`}>
    <div className="flex items-end gap-0.5 h-3 mb-0.5">
      <div className="w-0.5 h-1.5 bg-slate-800 rounded-full" />
      <div className="w-0.5 h-2.5 bg-slate-800 rounded-full" />
      <div className="w-0.5 h-3.5 bg-slate-800 rounded-full" />
      <div className="w-0.5 h-2.5 bg-slate-800 rounded-full" />
      <div className="w-0.5 h-3.5 bg-slate-800 rounded-full" />
      <div className="w-0.5 h-2.5 bg-slate-800 rounded-full" />
      <div className="w-0.5 h-1.5 bg-slate-800 rounded-full" />
    </div>
    <span className="text-xs font-black tracking-widest leading-none">CISCO</span>
  </div>
);

export const RipplingLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`flex items-center gap-1.5 text-slate-800 font-bold ${className}`}>
    <div className="flex gap-0.5 items-center">
      <span className="text-slate-800 font-black text-lg">{"}}}"}</span>
    </div>
    <span className="text-sm font-black tracking-widest uppercase">RIPPLING</span>
  </div>
);

export const RobloxLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`flex items-center gap-1 text-slate-900 font-black ${className}`}>
    <span className="text-lg tracking-tighter font-black">R</span>
    <div className="w-3.5 h-3.5 border-2 border-slate-900 rotate-12 -mt-0.5" />
    <span className="text-lg tracking-tighter font-black">BLOX</span>
  </div>
);

export const DropboxLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`flex items-center gap-1.5 text-slate-800 font-bold ${className}`}>
    <svg className="w-5 h-5 text-slate-800 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 3L1 7L6 11L11 7L6 3Z" />
      <path d="M18 3L13 7L18 11L23 7L18 3Z" />
      <path d="M1 15L6 19L11 15L6 11L1 15Z" />
      <path d="M23 15L18 11L13 15L18 19L23 15Z" />
      <path d="M6 20.5L12 16.5L18 20.5L12 24.5L6 20.5Z" />
    </svg>
    <span className="text-base font-bold tracking-tight">Dropbox</span>
  </div>
);

// Integration Icons in Dark Section (Screenshot 2)
export const ClaudeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#f97316" strokeWidth="1.5" />
    <path d="M12 3V21M3 12H21M5.6 5.6L18.4 18.4M18.4 5.6L5.6 18.4" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CursorIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#94a3b8" strokeWidth="1.5" fill="#334155" fillOpacity="0.4" />
    <polygon points="12,6 18,10 18,14 12,18 6,14 6,10" fill="#cbd5e1" />
  </svg>
);

export const CodexIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="3" stroke="#94a3b8" strokeWidth="1.5" />
    <path d="M7 10L10 12L7 14M13 14H17" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const GitHubCopilotIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.52 18.45 8.97 18.02 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.41 6.01 9.52 6.65 8.82C6.55 8.57 6.21 7.55 6.75 6.19C6.75 6.19 7.59 5.92 9.5 7.21C10.3 6.99 11.15 6.88 12 6.88C12.85 6.88 13.7 6.99 14.5 7.21C16.41 5.92 17.25 6.19 17.25 6.19C17.79 7.55 17.45 8.57 17.35 8.82C17.99 9.52 18.38 10.41 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.28 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.477 17.523 2 12 2Z" />
  </svg>
);

export const McpIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

// Google G logo for Auth
export const GoogleLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.27v3.15C3.26 21.28 7.34 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.27C.46 8.21 0 10.05 0 12s.46 3.79 1.27 5.41l4.01-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.72 1.27 6.59l4.01 3.15c.95-2.84 3.6-4.99 6.72-4.99z"
    />
  </svg>
);

export const MicrosoftLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect x="1" y="1" width="10" height="10" fill="#F25022" />
    <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
    <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
    <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
  </svg>
);

export const AppleLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.74-.95 2.76 1.01.08 2.05-.51 2.67-1.26" />
  </svg>
);

export const SlackLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M5.04 14.36a2.27 2.27 0 0 1-2.27-2.27c0-1.25 1.02-2.27 2.27-2.27h2.27v2.27c0 1.25-1.02 2.27-2.27 2.27z" fill="#E01E5A" />
    <path d="M9.58 14.36a2.27 2.27 0 0 1 2.27-2.27h2.27v2.27a2.27 2.27 0 1 1-4.54 0z" fill="#2EB67D" />
    <path d="M14.36 5.04a2.27 2.27 0 0 1 2.27-2.27c1.25 0 2.27 1.02 2.27 2.27v2.27h-2.27a2.27 2.27 0 0 1-2.27-2.27z" fill="#ECB22E" />
    <path d="M14.36 9.58a2.27 2.27 0 0 1 2.27 2.27v2.27h-2.27a2.27 2.27 0 1 1 0-4.54z" fill="#36C5F0" />
    <path d="M9.58 5.04a2.27 2.27 0 1 1 4.54 0v4.54H9.58V5.04z" fill="#ECB22E" />
    <path d="M5.04 9.58a2.27 2.27 0 1 1 0-4.54h4.54v4.54H5.04z" fill="#E01E5A" />
    <path d="M18.96 14.36a2.27 2.27 0 1 1 0 4.54h-4.54v-4.54h4.54z" fill="#2EB67D" />
    <path d="M14.36 18.96a2.27 2.27 0 1 1-4.54 0v-4.54h4.54v4.54z" fill="#36C5F0" />
  </svg>
);
