import React, { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { GoogleLogo } from './BrandLogos';
import { BrandConfig } from '../config/brandConfig';
import { Component as GradientBackground4 } from './ui/gradient-background-4';

interface HeroSectionProps {
  brand: BrandConfig;
  onContinueWithEmail?: (email: string) => void;
  onContinueWithGoogle?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  brand,
  onContinueWithEmail,
  onContinueWithGoogle
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid work email address.');
      return;
    }
    setError('');
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
    if (onContinueWithEmail) {
      onContinueWithEmail(email);
    }
  };

  const handleGoogleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
    if (onContinueWithGoogle) {
      onContinueWithGoogle();
    }
  };

  return (
    <section className="relative pt-8 md:pt-16 pb-16 overflow-hidden bg-transparent">
      {/* Radial Gradient Background (gradient-background-4) */}
      <GradientBackground4 />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Bold Headline & Subtext */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.03em] text-[#101214] leading-[1.08] text-balance">
              Turn plans into agent-ready tasks
            </h1>
            
            <p className="text-lg md:text-xl text-[#344563] leading-relaxed max-w-xl font-normal">
              Then build. Orchestrate work across your team and agents, with complete context.
            </p>
          </div>

          {/* Right Column: Hero Signup Panel from Screenshot 1 */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto">
            <div className="p-2">
              <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="hero-email" className="block text-xs font-semibold text-slate-800 mb-2">
                        Work email
                      </label>
                      <input
                        id="hero-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder="you@company.com"
                        className="w-full px-5 py-3.5 rounded-full border border-slate-300/80 bg-white/70 backdrop-blur-xs text-slate-900 placeholder:text-slate-400 text-base focus:border-[#0052cc] focus:bg-white focus:ring-3 focus:ring-[#0052cc]/15 outline-none transition-all shadow-xs"
                        autoComplete="email"
                      />
                      {error && (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium">{error}</p>
                      )}
                      <span className="block text-xs text-slate-600 mt-2">
                        Use a work email to find teammates and get access to {brand.aiName}
                      </span>
                    </div>

                    {/* Primary CTA Button: 'Sign up' */}
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-[#0052cc] hover:bg-[#0065ff] text-white font-bold text-base transition-all shadow-sm hover:shadow active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSuccess ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                          <span>Signed up</span>
                        </>
                      ) : (
                        <span>Sign up</span>
                      )}
                    </button>
                  </form>

                  {/* Divider: Or continue with */}
                  <div className="relative my-5 text-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-300/70" />
                    </div>
                    <span className="relative bg-transparent px-3 text-xs font-medium text-slate-600 backdrop-blur-xs">
                      Or continue with
                    </span>
                  </div>

                  {/* Google OAuth Button */}
                  <button
                    type="button"
                    onClick={handleGoogleClick}
                    className="w-full py-3 px-5 rounded-full border border-slate-300/80 bg-white/70 backdrop-blur-xs hover:bg-white text-slate-700 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-2xs hover:border-slate-400 cursor-pointer active:scale-[0.99]"
                  >
                    <GoogleLogo className="w-4 h-4" />
                    <span>Google</span>
                  </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
