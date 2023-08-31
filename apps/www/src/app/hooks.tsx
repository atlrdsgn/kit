'use client';

import React from 'react';
import { useFontsLoaded } from '@/components/hooks/use-fonts-loaded';

export const AppHooks: React.FC = () => {
  useFontsLoaded();
  return null;
};
