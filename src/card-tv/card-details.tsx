import { Box } from "@chakra-ui/react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHeader } from "../netflix-provider/header-provider";

function CardDetails() {
  const { tvpopular, idDetails, setDetailsCard, listFilm } = useHeader();

  const disableDetails = () => {
    setDetailsCard(false);
  };

  console.log(idDetails);

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
      {listFilm?.map((tv) => {
        if (tv.id == idDetails) {
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
              <Box color={"white"}>{tv?.name}</Box>
              <Box color={"white"}>{tv?.overview}</Box>
            </Box>
          );
        }
      })}
    </Box>
  );
}

export default CardDetails;
