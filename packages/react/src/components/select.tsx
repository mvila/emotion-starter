import {jsx, useTheme} from '@emotion/react';

export function Select({
  size = 'normal',
  ...props
}: Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> & {
  size?: 'normal' | 'small' | 'large';
}) {
  const theme = useTheme();

  let paddingLeft;
  let paddingRight;
  let yPadding;
  let fontSize = theme.fontSizes[size];
  let borderRadius = theme.radii[size];
  let backgroundPosition;

  if (size === 'small') {
    paddingLeft = '.5rem';
    paddingRight = '20px';
    yPadding = '.25rem';
    backgroundPosition = 'right 6px center';
  } else if (size === 'large') {
    paddingLeft = '1rem';
    paddingRight = '24px';
    yPadding = '.75rem';
    backgroundPosition = 'right 8px center';
  } else {
    paddingLeft = '.75rem';
    paddingRight = '24px';
    yPadding = '.5rem';
    backgroundPosition = 'right 8px center';
  }

  let css: any = {
    'paddingTop': yPadding,
    paddingRight,
    'paddingBottom': yPadding,
    paddingLeft,
    fontSize,
    'lineHeight': theme.lineHeights.normal,
    'color': theme.colors.text.normal,
    'backgroundColor': 'transparent',
    'borderWidth': '1px',
    'borderStyle': 'solid',
    'borderColor': theme.colors.border.normal,
    borderRadius,
    'outline': 'none',
    'boxShadow': 'none',
    'transition': 'border-color ease-in-out .15s',
    'verticalAlign': 'middle',
    'backgroundImage':
      "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23888' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\")",
    'backgroundRepeat': 'no-repeat',
    backgroundPosition,
    'backgroundSize': '8px 10px',
    'MozAppearance': 'none',
    'WebkitAppearance': 'none',
    ':focus': {
      borderColor: theme.colors.primary.normal
    }
  };

  if (props.disabled) {
    css = {
      ...css,
      cursor: 'not-allowed',
      opacity: 0.5
    };
  }

  return <select css={css} {...props} />;
}
