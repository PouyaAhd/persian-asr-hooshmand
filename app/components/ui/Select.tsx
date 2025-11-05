'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export default function Select({
  label,
  options,
  value,
  onChange,
  error,
  placeholder = 'انتخاب کنید',
  required = false,
  fullWidth = true,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={cn('flex flex-col gap-2', fullWidth && 'w-full', className)}>
      {label && (
        <label className="text-sm font-iran_med text-[#303030]">
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'w-full px-4 py-3 rounded-lg border border-[#E3E3E3] bg-white',
            'text-right text-[#303030] font-iran_reg text-sm',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            'transition-all duration-200',
            'flex items-center justify-between',
            error && 'border-red-500 focus:ring-red-500',
            !selectedOption && 'text-gray-400'
          )}
        >
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <svg
            className={cn(
              'w-4 h-4 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            <div className="absolute z-20 w-full mt-2 bg-white border border-[#E3E3E3] rounded-lg shadow-lg max-h-60 overflow-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    'w-full px-4 py-3 text-right text-sm font-iran_reg',
                    'hover:bg-purple-50 transition-colors duration-150',
                    'flex items-center justify-between gap-3',
                    'border-b border-gray-100 last:border-b-0',
                    value === option.value && 'bg-purple-50'
                  )}
                >
                  <span className="text-[#303030]">{option.label}</span>
                  
                  <div
                    className={cn(
                      'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0',
                      value === option.value
                        ? 'bg-primary border-primary'
                        : 'border-gray-300 bg-white'
                    )}
                  >
                    {value === option.value && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {error && (
        <p className="text-xs text-red-500 font-iran_reg">{error}</p>
      )}
    </div>
  );
}

