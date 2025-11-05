// Type Definitions

// Form Types
export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}

// Obstacle Card Types
export interface Obstacle {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// FAQ Types
export interface FAQ {
  question: string;
  answer: string;
}

// Button Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
}

