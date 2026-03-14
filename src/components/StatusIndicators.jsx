import React from 'react';

/**
 * LoadingSpinner: Displayed while images are being fetched from the server.
 */
export const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-[400px] animate-reveal">
    <div className="relative w-12 h-12">
      <div className="absolute top-0 left-0 w-full h-full border-2 border-white/10 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
    <p className="mt-6 text-apple-gray text-sm font-medium tracking-wide">Initializing curator stream...</p>
  </div>
);

/**
 * ErrorMessage: Displayed if the API call fails or results in an error.
 */
export const ErrorMessage = ({ message }) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center animate-reveal">
    <div className="glass-light p-10 rounded-[2rem] max-w-md">
      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">System Interruption</h3>
      <p className="text-apple-gray mb-8 text-sm">{message}</p>
      <button 
        onClick={() => window.location.reload()}
        className="px-8 py-3 bg-white text-black rounded-full hover:bg-apple-white transition-colors font-semibold"
      >
        Retry Connection
      </button>
    </div>
  </div>
);
