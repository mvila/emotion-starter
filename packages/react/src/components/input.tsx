import React, {Fragment, useCallback, useMemo, useRef, forwardRef} from 'react';
import {jsx, useTheme, Theme} from '@emotion/react';

type InputSize = 'normal' | 'small' | 'large';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: InputSize;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {type, ...props},
  ref
) {
  if (type === 'checkbox' || type === 'radio') {
    return <ToggleInput type={type} {...props} />;
  } else {
    return <TextInput forwardedRef={ref} type={type} {...props} />;
  }
});

function TextInput({
  forwardedRef,
  size,
  disabled,
  ...props
}: InputProps & {forwardedRef: React.ForwardedRef<HTMLInputElement>}) {
  const theme = useTheme();

  return (
    <input
      ref={forwardedRef}
      css={buildInputOrTextAreaCSS(theme, {size, disabled})}
      disabled={disabled}
      {...props}
    />
  );
}

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  size?: InputSize;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  {size, disabled, ...props}: TextAreaProps,
  ref
) {
  const theme = useTheme();

  return (
    <textarea
      ref={ref}
      css={buildInputOrTextAreaCSS(theme, {size, disabled})}
      disabled={disabled}
      {...props}
    />
  );
});

function buildInputOrTextAreaCSS(
  theme: Theme,
  {size = 'normal', disabled = false}: {size?: InputSize; disabled?: boolean}
) {
  let xPadding;
  let yPadding;
  let fontSize = theme.fontSizes[size];
  let borderRadius = theme.radii[size];

  if (size === 'small') {
    xPadding = '.5rem';
    yPadding = '.25rem';
  } else if (size === 'large') {
    xPadding = '1rem';
    yPadding = '.75rem';
  } else {
    xPadding = '.75rem';
    yPadding = '.5rem';
  }

  let css: any = {
    'paddingTop': yPadding,
    'paddingRight': xPadding,
    'paddingBottom': yPadding,
    'paddingLeft': xPadding,
    'fontFamily': 'inherit',
    fontSize,
    'lineHeight': theme.lineHeights.small,
    'color': theme.colors.text.normal,
    'backgroundColor': 'transparent',
    'borderWidth': '1px',
    'borderStyle': 'solid',
    'borderColor': theme.colors.border.normal,
    borderRadius,
    'outline': 'none',
    'boxShadow': 'none',
    'transition': 'border-color ease-in-out .15s',
    ':focus': {
      borderColor: theme.colors.primary.normal
    },
    '::placeholder': {
      color: theme.colors.text.moreMuted,
      opacity: 1
    }
  };

  if (disabled) {
    css = {
      ...css,
      cursor: 'not-allowed',
      opacity: 0.5
    };
  }

  return css;
}

function ToggleInput({type, checked, size: _size, disabled, ...props}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    const element = inputRef.current;
    const event = new MouseEvent('click', {bubbles: true});
    element!.dispatchEvent(event);
  }, []);

  const Mark = type === 'checkbox' ? CheckboxMark : RadioMark;

  return (
    <>
      <Mark checked={checked} onClick={handleClick} disabled={disabled} />
      <input
        ref={inputRef}
        type={type}
        checked={checked}
        disabled={disabled}
        {...props}
        css={{
          // Styles used to hide the underlying `<input>` tag.
          // Don't use `display: 'none'` to be able to focus the checkbox with the keyboard
          opacity: 0,
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          width: '0.5rem', // Don't set to 0: HTML field validation messages don't show up in Chrome
          height: '0.5rem'
        }}
      />
    </>
  );
}

function CheckboxMark({checked, onClick, disabled}: InputProps) {
  const theme = useTheme();

  const foregroundColor = checked ? theme.colors.background.normal : undefined;
  const backgroundColor = checked ? theme.colors.primary.normal : 'transparent';
  const borderColor = checked ? 'transparent' : theme.colors.text.muted;

  const encodedSVG = useMemo(
    () =>
      encodeURIComponent(`
<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.6 0.200059C11.0418 0.53143 11.1314 1.15823 10.8 1.60006L4.8 9.60006C4.62607 9.83197 4.36005 9.97699 4.07089 9.99754C3.78173 10.0181 3.49788 9.91215 3.29289 9.70717L0.292893 6.70717C-0.0976311 6.31664 -0.0976311 5.68348 0.292893 5.29295C0.683417 4.90243 1.31658 4.90243 1.70711 5.29295L3.89181 7.47765L9.2 0.400059C9.53137 -0.0417689 10.1582 -0.131312 10.6 0.200059Z"
      fill="${foregroundColor}"
    />
  </svg>
`),
    [foregroundColor]
  );

  return (
    <span
      onClick={!disabled ? onClick : undefined}
      style={{
        display: 'inline-block',
        width: '20px',
        height: '20px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor,
        borderRadius: theme.radii.normal,
        backgroundColor,
        backgroundImage: checked ? `url('data:image/svg+xml,${encodedSVG}')` : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: disabled ? 0.5 : undefined,
        cursor: !disabled ? 'pointer' : 'not-allowed',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        transitionDuration: '0.3s'
      }}
    />
  );
}

function RadioMark({checked, onClick, disabled}: InputProps) {
  const theme = useTheme();

  const foregroundColor = checked ? theme.colors.background.normal : undefined;
  const backgroundColor = checked ? theme.colors.primary.normal : 'transparent';
  const borderColor = checked ? 'transparent' : theme.colors.text.muted;

  return (
    <div
      onClick={!disabled ? onClick : undefined}
      style={{
        width: '20px',
        height: '20px',
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor,
        borderRadius: '50%',
        opacity: disabled ? 0.5 : undefined,
        cursor: !disabled ? 'pointer' : 'not-allowed'
      }}
    >
      <div
        style={{
          width: checked ? '6px' : '16px',
          height: checked ? '6px' : '16px',
          backgroundColor: foregroundColor,
          borderRadius: '50%',
          transitionDuration: '0.2s'
        }}
      />
    </div>
  );
}
