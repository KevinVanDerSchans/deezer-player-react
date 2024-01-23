import * as Tabs from "@radix-ui/react-tabs";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/features/favoritesSlice";
import TabContentContainer from "./TabContentContainer";
import TracksTabContent from "./TracksTabContent";
import ArtistsTabContent from "./ArtistsTabContent";

const TabsContainer = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <Tabs.Content value="tracks">
        <TabContentContainer entities={ favorites.track }>
          <TracksTabContent tracks={ favorites.track } />
        </TabContentContainer>
      </Tabs.Content>

      <Tabs.Content value="artists">
      <TabContentContainer entities={ favorites.artist }>
          <ArtistsTabContent artists={ favorites.artist }/>
      </TabContentContainer>
      </Tabs.Content>
    </>
  );
}

export default TabsContainer;
