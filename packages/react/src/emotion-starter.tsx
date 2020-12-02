import {useMemo} from 'react';
import {jsx, ThemeProvider, Global} from '@emotion/react';

import {getTheme} from './theme';
import {getStyles} from './styles';

export function EmotionStarter({
  mode,
  theme: customTheme,
  children
}: {
  mode?: 'light' | 'dark';
  theme?: any;
  children: React.ReactNode;
}) {
  const {theme, styles} = useMemo(() => {
    const theme = getTheme({mode, theme: customTheme});
    const styles = getStyles(theme);

    return {theme, styles};
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      {children}
    </ThemeProvider>
  );
}
