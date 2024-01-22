'use client';
import { SWRConfig } from 'swr';
import * as Tabs from '@radix-ui/react-tabs';
import TabsContainer from '../components/Favorites/TabsContainer';
import { Suspense } from 'react';
import Spinner from '../spinner';

const LibraryPage = () => {
  return (
    <div className='library-section'>
      <Tabs.Root
        className='tabs-container'
        defaultValue='tracks'
      >
        <Tabs.List className='tabs-list'>
          <Tabs.Trigger value='tracks' className='tabs-list-title'>Tracks</Tabs.Trigger>
          <Tabs.Trigger value='artists' className='tabs-list-title'>Artists</Tabs.Trigger>
        </Tabs.List>

        <Suspense fallback={ <Spinner /> }>
          <SWRConfig
            value={{
              fetcher: async ({ entitiesIds, endpoint }) => {
                try {
                  const promises = entitiesIds.map(async (id) => {
                    const res = await fetch(endpoint + '/' + id);

                    return res.json();
                  });
                  return await Promise.all(promises);
                }

                catch(error) {
                  throw error;
                }
              },
              suspense: true
            }}
          >
            <TabsContainer />
          </SWRConfig>
        </Suspense>
      </Tabs.Root>
    </div>
  )
}

export default LibraryPage;
