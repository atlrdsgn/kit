import React from 'react';
import { AppCoverPage, PageFooter, PageLayout } from '@/components/core';

export default function AppIndex() {
  return (
    <>
      <PageLayout type={'Standard'}>
        <AppCoverPage />
        <PageFooter />
      </PageLayout>
    </>
  );
}
