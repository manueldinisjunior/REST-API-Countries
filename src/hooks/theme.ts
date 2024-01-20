import { useEffect, useState } from 'react';
import { Theme } from '@/types/theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const html = document.documentElement;
    const activeTheme = localStorage.getItem('theme') as Theme | null;

    if (!activeTheme) {
      html.classList.add('light');
      return 'light';
    }

    if (activeTheme !== 'light' && activeTheme !== 'dark') {
      html.classList.add('light');
      return 'light';
    }

    html.classList.add(activeTheme);
    return activeTheme;
  });

  const isLight = theme === 'light';

  /**
   *
   * @param checker - Indicate if the theme is light.
   */
  const addThemeClass = (checker?: boolean) => {
    const isLight = checker ? checker : theme === 'light';
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(isLight ? 'dark' : 'light');
  };

  const toggleTheme = () => {
    setTheme(isLight ? 'dark' : 'light');
    addThemeClass();
  };

  const changeTheme = (t: Theme) => {
    const isLight = t === 'light';
    setTheme(theme);
    addThemeClass(isLight);
  };

  useEffect(() => {
    console.log('Active theme :', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
    changeTheme,
  };
};
