import * as Tabs from '@radix-ui/react-tabs';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/features/favoritesSlice';
import TabContentContainer from './TabContentContainer';
import TracksTabContent from './TracksTabContent';

const TabsContainer = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Tabs.Content value='tracks'>
      <TabContentContainer entities={ favorites.track }>
        <TracksTabContent tracks={ favorites.track } />
      </TabContentContainer>
    </Tabs.Content>
  )
}

export default TabsContainer;
