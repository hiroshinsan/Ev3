//types
import type { ButtonProps } from '../react/Button';
//components
import ReactButton from '../react/Button';
//react
import React from 'react';
//helpers
import makeClasses from '../helpers/makeClasses';

/**
 * Generic Button component (Main)
 */
const Button: React.FC<ButtonProps> = (props) => {
  // Separate component related props from field attributes
  const { 
    className,
    block,
    xs,
    sm,
    md,
    lg,
    xl,
    curved,
    rounded,
    pill,
    danger, 
    warning, 
    success, 
    info,
    muted,
    outline, 
    transparent, 
    solid, 
    ...attributes 
  } = props;

  const text = danger ? 'text-[#DC3545]'
    : warning ? 'text-[#FFC107]'
    : success ? 'text-[#28A745]'
    : info ? 'text-[#1474FC]'
    : muted ? 'text-[#666666]'
    : undefined;

  const border = danger ? 'border-[#DC3545]'
    : warning ? 'border-[#FFC107]'
    : success ? 'border-[#28A745]'
    : info ? 'border-[#1474FC]'
    : muted ? 'border-[#666666]'
    : undefined;

  const background = danger ? 'bg-[#DC3545]'
    : warning ? 'bg-[#FFC107]'
    : success ? 'bg-[#28A745]'
    : info ? 'bg-[#1474FC]'
    : muted ? 'bg-[#666666]'
    : undefined;

  //determine size
  const sizes = [ 'xs', 'sm', 'md', 'lg', 'xl' ];
  const size = xs ? 'xs' 
    : sm ? 'sm' 
    : md ? 'md' 
    : lg ? 'lg' 
    : xl ? 'xl' 
    : 'md';
  const padding = [ 
    ['py-1', 'px-2'], //xs
    ['py-2', 'px-4'], //sm
    ['py-4', 'px-8'], //md
    ['py-6', 'px-16'], //lg
    ['py-8', 'px-20'] //xl
  ][sizes.indexOf(size)];
  const font = [ 
    'text-xs', 
    'text-sm', 
    'text-md', 
    'text-xl', 
    'text-3xl' 
  ][sizes.indexOf(size)];

  //determine radius
  const radius = curved 
    ? 'rounded-[5px]' 
    : rounded 
    ? 'rounded-[15px]' 
    : pill 
    ? 'rounded-full' 
    : undefined;

  const classes = [
    makeClasses(className, [
      block ? 'block' : undefined,
      'border',
      border,
      radius,
      font,
      padding[0],
      padding[1],
      'text-center',
    ].filter(className => !!className).join(' '))
  ];

  if (outline) {
    classes.push('bg-white', text);
  } else if (transparent) {
    classes.push(text);
  } else if (muted) {
    classes.push(background, 'text-[#DEDEDE]');
  } else if (background) {
    classes.push(background, 'text-white');
  }

  classes.push(className);

  return (
    <ReactButton className={classes.join(' ')} style={false} {...attributes} />
  );
}

export default Button;