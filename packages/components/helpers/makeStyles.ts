//react
import React from 'react';

export function makeGroupStyles(
  userGroupStyles?: Record<string, React.CSSProperties|undefined|false>|false,
  defaultGroupStyles: Record<string, React.CSSProperties|Function|undefined> = {}
) {
  //if userGroupStyles is false, it means 
  //the user doesn't want to use any styles
  if (userGroupStyles === false) {
    return {};
  //if userGroupStyles is undefined, make it an empty object
  } else if (!userGroupStyles) {
    userGroupStyles = {};
  }
  //otherwise, create a new object to store the group styles
  const groupStyles: Record<string, React.CSSProperties|undefined> = {};
  for (const key in defaultGroupStyles) {
    groupStyles[key] = makeStyles(
      userGroupStyles[key], 
      defaultGroupStyles[key]
    );
  }
  return groupStyles;
}

export default function makeStyles(
  userStyles?: React.CSSProperties|false,
  defaultStyles?: React.CSSProperties|Function
) {
  //if defaultStyles is a function, call it to get the default styles
  if (typeof defaultStyles === 'function') {
    defaultStyles = defaultStyles() || undefined;
  }
  //if userStyles is false, it means the 
  //user doesn't want to use any styles
  if (userStyles === false) {
    return {};
  }
  const styles = userStyles 
    ? {...(defaultStyles || {}), ...userStyles} 
    : defaultStyles as React.CSSProperties|undefined;

  return Object.keys(styles || {}).length > 0 ? styles : undefined;
}