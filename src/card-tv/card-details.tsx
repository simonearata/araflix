import { AspectRatio, Box } from "@chakra-ui/react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { fetchApi, ITrailer } from "../api";
import { useHeader } from "../netflix-provider/header-provider";

function CardDetails() {
  const {
    idDetails,
    setDetailsCard,
    listFilm,
    listMovie,
    setTrailer,
    trailer,
  } = useHeader();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchApi<ITrailer>("movie/" + `${idDetails}` + "/videos")
      .then((data) => {
        setTrailer(data);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  const disableDetails = () => {
    setDetailsCard(false);
  };

  const unionArray = [...listMovie, ...listFilm];

  const firstTrailer = trailer?.results.map((e, index) => {
    if (index === 0) {
      return e.key;
    }
  });

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
      <Box>
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/watch?v=" + firstTrailer}
        ></iframe>
      </Box>
    </Box>
  );
}

export default CardDetails;
