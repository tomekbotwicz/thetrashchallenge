import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { GenericHeader } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, Details } from './styles';

export const Privacy = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <GenericHeader/>
      <Wrapper as={Container}>
        <Details theme={theme}>
          <h1>privacy policy:</h1>
          <h2>
            <b>
              last updated november 8th, 2021
            </b>
          </h2>
          <br/>
          <br/>
          <p>
            tomek.org regards privacy as a fundamental human right.
          </p>
          <p>
            > this site collects <u>absolutely zero</u> data.
          <br/>
            > this site <u>does not</u> use analytical or tracking software.
          {/*<br/>
            > i collect emails submitted through our waitlist.
          <br/>
          > i store collected emails and a collection timestamp on a secure server.*/}
          </p>
          <p>
            for any questions, email <a href="mailto:privacy@plot.community">privacy@plot.community.</a>
          </p>
          {/*<p>
            re-enter your email to be removed from the waitlist:
          </p>
          <Deletion/>*/}
        </Details>
      </Wrapper>
    </div>
  );
};
