//types
import type { AlertProps } from '../types';
//react
import React from 'react';
//helpers
import { makeClasses, makeStyles } from '../utils';

/**
 * Alert Component (Main)
 */
const Alert: React.FC<AlertProps> = props => {
  const { 
    color,
    error, 
    warning, 
    success, 
    info, 
    muted,
    solid, 
    outline, 
    curved,
    rounded,
    pill, 
    style,
    className,
    children 
  } = props;

  const layout = outline ? 'outline' 
    : solid ? 'solid'
    : 'solid';

  const colour = color? color
    : error ? '#DC3545'
    : warning ? '#FFC107'
    : info ? '#1474FC'
    : success ? '#28A745'
    : muted ? '#999999'
    : undefined;

  const icon = error ? 'before:content-icon-error'
    : warning ? 'before:content-icon-warning'
    : info ? 'before:content-icon-info'
    : success ? 'before:content-icon-success'
    : undefined;

  const round = curved ? '5px' 
    : rounded ? '12px' 
    : pill ? '10000px' 
    : undefined;

  const map = {
    classes: makeClasses(className, [
      icon ? 'before:font-awesome' : undefined,
      icon ? 'before:font-black' : undefined,
      icon ? 'before:inline-block' : undefined,
      icon ? 'before:pr-3' : undefined,
      icon
    ].filter(Boolean).join(' ')),
    styles: makeStyles(style, {
      borderColor: colour,
      borderRadius: round,
      borderStyle: 'solid',
      borderWidth: '1px',
      backgroundColor: layout === 'solid' ? colour : undefined,
      color: layout === 'outline' ? colour : 'white',
      paddingBottom: '16px',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '16px'
    })
  };
  

  return (
    <div className={map.classes} style={map.styles}>
      {children}
    </div>
  );
};

export default Alert;