import {jsx, useTheme} from '@emotion/react';

import {ColorName} from '../theme';

export function Button({
  color = 'neutral',
  size = 'normal',
  variant = 'normal',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ColorName;
  size?: 'normal' | 'small' | 'large';
  variant?: 'normal' | 'outline';
}) {
  const theme = useTheme();

  let textColor;
  let backgroundColor;
  let borderColor;
  let hoveredTextColor;
  let hoveredBackgroundColor;
  let hoveredBorderColor;

  if (variant === 'outline') {
    textColor = theme.colors[color].normal;
    backgroundColor = 'transparent';
    borderColor = textColor;
    hoveredTextColor = theme.colors[color].highlighted;
    hoveredBackgroundColor = backgroundColor;
    hoveredBorderColor = hoveredTextColor;
  } else {
    textColor = theme.colors[color].textOnNormal;
    backgroundColor = theme.colors[color].normal;
    borderColor = backgroundColor;
    hoveredTextColor = textColor;
    hoveredBackgroundColor = theme.colors[color].highlighted;
    hoveredBorderColor = hoveredBackgroundColor;
  }

  let xPadding;
  let yPadding;
  let fontSize = theme.fontSizes[size];
  let borderRadius = theme.radii[size];

  if (size === 'small') {
    xPadding = '.5rem';
    yPadding = '.25rem';
  } else if (size === 'large') {
    xPadding = '1.25rem';
    yPadding = '.75rem';
  } else {
    xPadding = '1rem';
    yPadding = '.5rem';
  }

  let css: any = {
    display: 'inline-block',
    paddingTop: yPadding,
    paddingRight: xPadding,
    paddingBottom: yPadding,
    paddingLeft: xPadding,
    fontSize,
    fontWeight: 'normal',
    lineHeight: theme.lineHeights.small,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    color: textColor,
    backgroundColor,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor,
    borderRadius,
    outline: 'none',
    transition: 'all .2s ease-in-out',
    cursor: 'pointer',
    userSelect: 'none'
  };

  if (!props.disabled) {
    css = {
      ...css,
      ':hover': {
        color: hoveredTextColor,
        backgroundColor: hoveredBackgroundColor,
        borderColor: hoveredBorderColor
      }
    };
  } else {
    css = {
      ...css,
      'cursor': 'not-allowed',
      'opacity': 0.5,
      ':hover': {}
    };
  }

  return <button css={css} {...props} />;
}
