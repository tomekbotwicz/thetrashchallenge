import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';
import { ParallaxProvider } from "react-scroll-parallax";

export const wrapPageElement = ({ element, props }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>
};

export const onServiceWorkerUpdateReady = () => window.location.reload(true);

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
