import { useContext, useEffect } from "react";
import ReactPlayer from "react-player";

import { ListItem } from "../../components/ListItem/ListItem";
import { AuthContext } from "../../context/AuthContext";
import { Loader, Flex, Text } from "../../components";
import { StyledContainer } from "./HomeScreen.styles";
import { useNavigate } from "react-router-dom";
import { useFetchMedia } from "./hooks/useFetchMedia";

export const HomeScreen = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { fetchData, isLoading, isError, data } = useFetchMedia();
  
  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    fetchData();
  }, []);

  return (
    <StyledContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data && !isError ? (
            <Flex column center>
              <ListItem media={data} title="Latest Hits" />
              <ListItem media={data} title="Comedies" />
            </Flex>
          ) : (
            <Text>Something went wrong.</Text>
          )}
        </>
      )}
    </StyledContainer>
  );
};
