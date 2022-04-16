import React from 'react';
import { SidePageLayout, SEOConfig } from 'components/common';
import { Submitted } from 'components/landing';

const PageSubmitted = () => {
  return (
  <SidePageLayout>
    <SEOConfig/>
    <Submitted/>
  </SidePageLayout>
);
};

export default PageSubmitted;