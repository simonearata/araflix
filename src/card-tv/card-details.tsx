import { Box } from "@chakra-ui/react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHeader } from "../netflix-provider/header-provider";

function CardDetails() {
  const { idDetails, setDetailsCard, listFilm, listMovie } = useHeader();

  const disableDetails = () => {
    setDetailsCard(false);
  };

  const unionArray = [...listMovie, ...listFilm];

  return (
    <Box
      position={"absolute"}
      width={"80%"}
      height={"60%"}
      zIndex={"9999"}
      bg="rgba(0,0,0, 0.65)"
      left={"10%"}
      right={"10%"}
    >
      {unionArray?.map((items) => {
        if (items.id === idDetails) {
          return (
            <Box>
              <Box
                bgColor={"white"}
                onClick={() => {
                  disableDetails();
                }}
                d={"inline-block"}
              >
                <FontAwesomeIcon icon={faWindowClose} />
              </Box>
              <Box color={"white"}>{items?.vote_average}</Box>
              <Box color={"white"}>{items?.overview}</Box>
            </Box>
          );
        }
      })}
    </Box>
  );
}

export default CardDetails;
