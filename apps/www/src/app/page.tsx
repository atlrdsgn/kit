import React from 'react';
import { CoverPageTwo, PageFooter, PageLayout } from '@/components/core';

export default function AppIndex() {
  return (
    <>
      <PageLayout type={'Standard'}>
        <CoverPageTwo />
        <PageFooter />
      </PageLayout>
    </>
  );
}
