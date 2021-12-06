import React, {useContext} from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';
import styled from "styled-components";

const NavbarLinks = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme}>
      <a href="#writing">writing</a>
      <a href="#projects">projects</a>
      <a href="#major">major</a>
    </Wrapper>
  )

};

export default NavbarLinks;
