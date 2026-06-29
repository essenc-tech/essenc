'use client';

import { ReactNode } from 'react';
import SearchDialog from './search-dialog';

export default function SearchProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <SearchDialog />
    </>
  );
}