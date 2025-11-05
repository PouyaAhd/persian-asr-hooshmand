'use client';

import { cn } from '@/lib/utils';

interface MultiSelectOption {
  value: string;
  label: string;
}

interface MultiSelectProps {
  label?: string;
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

export default function MultiSelect({
  label,
  options,
  value = [],
  onChange,
  error,
  required = false,
  className,
}: MultiSelectProps) {
  const handleToggle = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onChange?.(newValue);
  };

  return (
    <div className={cn('flex flex-col  gap-3', className)}>
      {label && (
        <label className="text-sm font-iran_med text-[#303030]">
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </label>
      )}

      <div className="flex flex-wrap gap-3 md:gap-4 justify-start">
        {options.map((option) => {
          const isSelected = value.includes(option.value);
          
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleToggle(option.value)}
              className={cn(
                'relative px-5 py-[10px] rounded-[16px] border-[1px] transition-all duration-200',
                'text-sm font-iran_reg flex items-center gap-2 flex-shrink-0',
                'hover:shadow-md whitespace-nowrap',
                isSelected
                  ? 'border-[#E3E3E3] bg-[#FCFCFC] text-[#303030]'
                  : 'border-[#E3E3E3] bg-[#FCFCFC] text-[#515151]'
              )}
            >
             
              
              <div
                className={cn(
                  'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200',
                  isSelected
                    ? 'border-[#6B46C1]'
                    : 'bg-[#ECECEC] border-[#E3E3E3] border-[0.5px]'
                )}
              >
                {isSelected && (
                  <svg
                    className="w-3 h-3 text-[#6B46C1]"
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
              <span className="font-iran_bold text-[12px]">{option.label}</span>
            </button>
          );
        })}
      </div>

      {error && (
        <p className="text-xs text-red-500 font-iran_reg text-right">{error}</p>
      )}
    </div>
  );
}

