import React from 'react';
import { HomePage, PageFooter, PageLayout } from '@/components/core';

export default function AppIndex() {
  return (
    <>
      <PageLayout type={'Standard'}>
        <HomePage />
        <PageFooter />
      </PageLayout>
    </>
  );
}
