import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchApi, ITv } from "../api";

function CardTv() {
  const [tvpopular, setTvpopular] = useState<ITv>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchApi<ITv>("tv/popular")
      .then((data) => {
        setTvpopular(data);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  return (
    <Box whiteSpace={"nowrap"} overflowX={"auto"}>
      <Heading
        as="h3"
        size="md"
        textAlign={"left"}
        color={"white"}
        my={"5px"}
        mt={"30px"}
      >
        Serie TV da vedere tutte d'un fiato
      </Heading>

      {tvpopular?.results?.map((result) => {
        return (
          <Box className="flip-card">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <Image
                  src={"https://image.tmdb.org/t/p/w342" + result?.poster_path}
                  objectFit={"cover"}
                />
              </Box>
              <Box className="flip-card-back">
                <Heading size={"sm"}>{result?.name}</Heading>
                <Text fontSize={"xs"}>{result?.overview}</Text>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default CardTv;
