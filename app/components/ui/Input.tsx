'use client';

import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, leftIcon, rightIcon, fullWidth = true, className, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-2', fullWidth && 'w-full')}>
        {label && (
          <label className="text-sm font-iran_med text-[#303030]">
            {label}
            {props.required && <span className="text-red-500 mr-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
          
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-2 rounded-[16px] border border-[#E3E3E3] bg-white',
              'text-[#303030] font-iran_reg text-sm',
              'placeholder:text-gray-400',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              'transition-all duration-200',
              'disabled:bg-gray-100 disabled:cursor-not-allowed',
              error && 'border-red-500 focus:ring-red-500',
              rightIcon && 'pr-12',
              leftIcon && 'pl-12',
              className
            )}
            {...props}
          />
          
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="text-xs text-red-500 font-iran_reg">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

