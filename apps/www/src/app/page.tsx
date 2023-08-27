import React from 'react';
import { HomePage, GlobalFooter, PageLayout } from '@/components/core';

export default function AppIndex() {
  return (
    <>
      <PageLayout type={'Standard'}>
        <HomePage />
        <GlobalFooter />
      </PageLayout>
    </>
  );
}
