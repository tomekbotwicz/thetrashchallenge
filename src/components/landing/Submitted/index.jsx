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
          <br/><br/><br/><br/><br/><br/>
          <h1>Success!</h1>
          <p>
            Thanks for joining! You will receive an email soon with details on how to begin.
          </p>
          <a href="/">
            <Button theme={theme}>
              Back
            </Button>
          </a>
        </Details>
      </Wrapper>
    </div>
  );
};
