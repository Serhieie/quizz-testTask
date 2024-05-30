import { ReactNode } from 'react';

export interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  text: string;
  handleClick?: () => void;
  children?: ReactNode;
  confirm?: boolean;
}
