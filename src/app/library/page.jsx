'use client';
import { SWRConfig } from 'swr';
import * as Tabs from '@radix-ui/react-tabs';
import TabsContainer from '../components/Favorites/TabsContainer';
import { Suspense } from 'react';
import Spinner from '../spinner';

const LibraryPage = () => {
  return (
    <Tabs.Root
      className='tabs-container'
      defaultValue='tracks'
    >
      <Tabs.List className='tabs-list'>
        <Tabs.Trigger value='tracks'>Tracks</Tabs.Trigger>
      </Tabs.List>

      <Suspense fallback={ <Spinner /> }>
        <SWRConfig
          value={{
            fetcher: async ({ entitiesIds, endpoint }) => {
              const promises = entitiesIds.map(async (id) => {
                const res = await fetch(endpoint + '/' + id);

                return res.json();
              });
              return await Promise.all(promises);
            },
            suspense: true
          }}
        >
          <TabsContainer />
        </SWRConfig>
      </Suspense>
    </Tabs.Root>
  )
}

export default LibraryPage;
