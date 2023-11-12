import React from 'react';
import { PageLayout } from '@/components/core';
import { AppNavbar } from '@/components/navigation';

import ComponentsPage from '@/components/core/components.page';
import KitBadge from '@/components/docs/badge';
import KitButton from '@/components/docs/button';
import KitSelect from '@/components/docs/select';
import KitPopover from '@/components/docs/popover';
import KitCopyCommand from '@/components/docs/copy-cmd';

const ComponentsIndex = () => {
  return (
    <>
      <PageLayout type={'Standard'}>
        <AppNavbar />
        <ComponentsPage />

        <KitBadge />
        <KitButton />
        <KitPopover />
        <KitSelect />
        <KitCopyCommand />
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;
