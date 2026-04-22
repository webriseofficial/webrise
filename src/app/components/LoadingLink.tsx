import React, { useState } from 'react';
import { Link, LinkProps, useNavigate } from 'react-router';
import { LoadingScreen } from './LoadingScreen';
import { AnimatePresence } from 'motion/react';

interface LoadingLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function LoadingLink({ to, children, className, onClick, ...props }: LoadingLinkProps) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Se è un anchor link (#), non mostrare loading
    if (to.includes('#')) {
      if (onClick) onClick();
      return;
    }

    e.preventDefault();
    setIsLoading(true);
    
    if (onClick) onClick();

    setTimeout(() => {
      navigate(to);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 800);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      <Link to={to} className={className} onClick={handleClick} {...props}>
        {children}
      </Link>
    </>
  );
}
