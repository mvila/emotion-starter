import {useMemo} from 'react';
import {jsx, ThemeProvider, Global, Theme} from '@emotion/react';

import {getTheme} from './theme';
import {getGlobalStyles} from './styles';

export function EmotionStarter({
  mode,
  theme: customTheme,
  globalStylesGetter,
  children
}: {
  mode?: 'light' | 'dark';
  theme?: any;
  globalStylesGetter?: (theme: Theme) => any;
  children: React.ReactNode | ((theme: Theme) => React.ReactNode);
}) {
  const {theme, styles} = useMemo(() => {
    const theme = getTheme({mode, theme: customTheme});
    const styles = getGlobalStyles(theme);

    if (globalStylesGetter !== undefined) {
      styles.push(globalStylesGetter(theme));
    }

    return {theme, styles};
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      {typeof children === 'function' ? children(theme) : children}
    </ThemeProvider>
  );
}
