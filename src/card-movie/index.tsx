import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchApi, IMovie } from "../api";
import "../theme/style.css";

interface ICardMovie {
  string: string;
}

function CardMovie(props: ICardMovie) {
  const [moviepopular, setMoviepopular] = useState<IMovie>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchApi<IMovie>("movie/popular")
      .then((data) => {
        setMoviepopular(data);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  const filteredFilm = moviepopular?.results?.filter((movie) => {
    return movie?.title?.toLowerCase().includes(props?.string?.toLowerCase());
  });

  if (props?.string !== "") {
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
          film cercati
        </Heading>

        {filteredFilm?.map((film) => {
          return (
            <Box
              m="4px"
              w={"250px"}
              h={"140px"}
              overflow={"hidden"}
              d={"inline-block"}
              borderRadius={"5px"}
              color={"white"}
            >
              {film?.title}
            </Box>
          );
        })}
      </Box>
    );
  }

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
        I titoli del momento
      </Heading>

      {moviepopular?.results?.map((result) => {
        return (
          <Box className="flip-card">
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <Image
                  src={"https://image.tmdb.org/t/p/w342" + result?.poster_path}
                />
              </Box>
              <Box className="flip-card-back">
                <Heading size={"sm"}>{result?.title}</Heading>
                <Text fontSize={"xs"}>{result?.overview}</Text>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default CardMovie;
