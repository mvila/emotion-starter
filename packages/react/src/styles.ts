import type {Theme} from '@emotion/react';
import {normalize} from 'react-style-reset';

export function getStyles(theme: Theme) {
  return [
    normalize,
    {
      'html': {
        fontSize: theme.fontSizes.normal,
        boxSizing: 'border-box'
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      'body': {
        fontFamily: theme.fontFamilies.body,
        lineHeight: theme.lineHeights.normal,
        color: theme.colors.text.normal,
        backgroundColor: theme.colors.background.normal
      },
      'p': {
        marginTop: '1rem',
        marginBottom: '1rem'
      },
      'h1, h2, h3, h4, h5, h6': {
        marginBottom: '1rem',
        fontFamily: theme.fontFamilies.heading,
        fontWeight: theme.fontWeights.semibold,
        lineHeight: theme.lineHeights.small,
        color: theme.colors.text.normal
      },
      'h1': {marginTop: theme.fontSizes.h1, fontSize: theme.fontSizes.h1},
      'h2': {marginTop: theme.fontSizes.h2, fontSize: theme.fontSizes.h2},
      'h3': {marginTop: theme.fontSizes.h3, fontSize: theme.fontSizes.h3},
      'h4': {marginTop: theme.fontSizes.h4, fontSize: theme.fontSizes.h4},
      'h5': {marginTop: theme.fontSizes.h5, fontSize: theme.fontSizes.h5},
      'h6': {marginTop: theme.fontSizes.h6, fontSize: theme.fontSizes.h6},
      'hr': {
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        border: 0,
        borderTop: `1px solid ${theme.colors.border.normal}`
      },
      'ol, ul, dl': {
        marginTop: '1rem',
        marginBottom: '1rem'
      },
      'ol ol, ul ul, ol ul, ul ol': {
        marginTop: 0,
        marginBottom: 0
      },
      'li': {
        marginTop: '.5rem'
      },
      'a': {
        color: theme.colors.primary.normal,
        textDecoration: 'none'
      },
      'a:hover': {
        color: theme.colors.primary.highlighted,
        textDecoration: 'underline'
      },
      'a:focus': {
        outline: 'none'
      },
      'small': {
        fontSize: theme.fontSizes.small
      },
      'table': {
        borderSpacing: 0,
        borderCollapse: 'collapse',
        borderColor: theme.colors.border.normal
      },
      'th, td': {
        border: `1px solid ${theme.colors.border.normal}`
      },
      'blockquote': {
        margin: '1.5rem 0',
        paddingLeft: '1rem',
        color: theme.colors.text.muted,
        borderLeft: `3px solid ${theme.colors.border.normal}`
      }
    }
  ] as any;
}
