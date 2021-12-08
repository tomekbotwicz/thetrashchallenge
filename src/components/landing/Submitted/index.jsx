import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { Wrapper, Details } from './styles';

export const Submitted = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Wrapper as={Container}>
        <Details theme={theme}>
          <h1>success!</h1>
          <p>
            thanks for joining! you will receive an email soon with details on how to begin.
          </p>
          <a href="/">
            <Button theme={theme}>
              back
            </Button>
          </a>
        </Details>
      </Wrapper>
    </div>
  );
};
