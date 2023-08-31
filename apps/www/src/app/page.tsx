import React from 'react';
import { CoverPageOne, PageFooter, PageLayout } from '@/components/core';

export default function AppIndex() {
  return (
    <>
      <PageLayout type={'Standard'}>
        <CoverPageOne />
        <PageFooter />
      </PageLayout>
    </>
  );
}
