import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { GenericHeader } from 'components/theme';
import Link from 'gatsby';
import { Container, Button } from 'components/common';
import { Wrapper, Details } from './styles';

export const Submitted = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Wrapper as={Container}>
        <Details theme={theme}>
        <br/><br/><br/><br/>
          <br/>
          <br/>
          <h1>Success!</h1>
          <p>
          Thanks for joining! You will receive an email soon with details on how to begin.</p>
          <Button theme={theme} as={Link} href="/">
              Back
            </Button>
        </Details>
      </Wrapper>
    </div>
  );
};
