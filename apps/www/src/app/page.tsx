import React from 'react';
import {
  // AppCoverPage,
  FlexCoverPage,
  PageFooter,
  PageLayout,
} from '@/components/core';

export default function AppIndex() {
  return (
    <>
      <PageLayout type={'Standard'}>
        <FlexCoverPage />
        <PageFooter />
      </PageLayout>
    </>
  );
}
