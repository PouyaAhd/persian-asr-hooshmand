import 'framer-motion';
import { FormEventHandler } from 'react';

declare module 'framer-motion' {
  export interface MotionProps {
    className?: string;
    onSubmit?: FormEventHandler<HTMLFormElement>;
    type?: string;
    disabled?: boolean;
  }
}

