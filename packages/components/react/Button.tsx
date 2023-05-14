//types
import type { HTMLButtonProps } from './types';
export type ButtonProps = HTMLButtonProps & {
  block?: boolean,
  color?: string,
  xs?: boolean, 
  sm?: boolean, 
  md?: boolean, 
  lg?: boolean, 
  xl?: boolean, 
  curved?: boolean,
  rounded?: boolean,
  pill?: boolean,
  danger?: boolean, 
  warning?: boolean, 
  success?: boolean,
  info?: boolean,
  muted?: boolean, 
  outline?: boolean, 
  transparent?: boolean, 
  solid?: boolean, 
  width?: string,
  style?: React.CSSProperties|false,
};

/**
 * Generic Button component (Main)
 */
const Button: React.FC<ButtonProps> = (props) => {
  // Separate component related props from field attributes
  const { 
    style,
    className,
    block,
    color,
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
    width,
    children,
    ...attributes 
  } = props;

  //determine theme
  const themes = {
    danger: '#DC3545', 
    warning: '#FFC107', 
    success: '#28A745', 
    info: '#1474FC',
    muted: '#666666'
  };

  const theme = color ? color 
    : danger ? themes.danger 
    : warning ? themes.warning 
    : success ? themes.success 
    : info ? themes.info 
    : muted ? themes.muted 
    : undefined;

  //determine size
  const sizes = [ 'xs', 'sm', 'md', 'lg', 'xl' ];
  const size = xs ? 'xs' : sm ? 'sm' : md ? 'md' : lg ? 'lg' : xl ? 'xl' : 'md';
  const padding = [ [2, 4], [4, 8], [8, 16], [16, 48], [24, 64] ][sizes.indexOf(size)];
  const font = [ 0.5, 0.75, 1, 1.25, 1.5 ][sizes.indexOf(size)];

  //determine radius
  const radius = curved ? '5px' : rounded ? '15px' : pill ? '1000px' : undefined;
 
  // Default styles
  let styles = style || {};
  if (style !== false) {
    styles = Object.assign({}, {
      borderColor: theme,
      borderRadius: radius,
      borderStyle: 'solid',
      borderWidth: '1px',
      fontSize: `${font}em`,
      paddingBottom: `${padding[0]}px`,
      paddingLeft: `${padding[1]}px`,
      paddingRight: `${padding[1]}px`,
      paddingTop: `${padding[0]}px`,
      textAlign: 'center'
    }, style || {});
    //if block
    if (block) {
      styles.display = 'block';
    }
    //if theme
    if (theme) {
      if (outline) {
        styles.backgroundColor = 'white';
        styles.color = theme;
      } else if (transparent) {
        styles.color = theme;
      } else if (muted) {
        styles.backgroundColor = theme;
        styles.color = '#DEDEDE';
      } else {
        styles.backgroundColor = theme;
        styles.color = 'white';
      }
    }
  }

  return (
    <button style={styles} {...attributes}>
      {children}
    </button>
  );
}

export default Button;