import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles_toggle';
import sunIcon from 'assets/icons/sun.svg';
import moonIcon from 'assets/icons/moon.svg';

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme} theme={theme} alt="button to toggle dark mode">
      <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};