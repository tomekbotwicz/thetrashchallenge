import React from 'react';
import { SidePageLayout, Seo } from 'components/common';
import { Submitted } from 'components/landing';

export default () => (
  <SidePageLayout>
    <Seo/>
    <Submitted/>
  </SidePageLayout>
);