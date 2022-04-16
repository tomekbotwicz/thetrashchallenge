import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import styled from "styled-components";

const Center = styled.div`
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Page404 = () => {
  return (
  <SidePageLayout>
    <SEOConfig title="404: Not found" location="/404" />
    <Center>
      <h1>404: not found</h1>
      <p><b>this page does not exist.</b></p>
      <br/>
    </Center>
  </SidePageLayout>
);
};

export default Page404;