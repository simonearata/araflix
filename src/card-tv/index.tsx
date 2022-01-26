import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OverCard from "./over-card";
import "../theme/style.css";
import { useHeader } from "../netflix-provider/header-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export interface IEvent {
  left: number;
  top: number;
  w: number;
  h: number;
}

function CardTv() {
  const { moviepopular, tvpopular, listMovie, setShowOver, search, listFilm } =
    useHeader();
  const [idCard, setIdCard] = useState<number>();
  const [features, setFeatures] = useState<IEvent>();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const actionCard = (id: number) => {
    setShowOver(true);
    setIdCard(id);
  };

  const fetchCall = [
    {
      heading: "Serie TV da vedere tutte d'un fiato",
      dataFetch: tvpopular,
    },
    {
      heading: "I titoli del momento",
      dataFetch: moviepopular,
    },
  ];

  const idTv = listFilm?.map((tv) => {
    return tv.id;
  });

  const idMovie = listMovie?.map((movie) => {
    return movie.id;
  });

  const allId = [...idMovie, ...idTv];

  const filteredFilm = moviepopular?.results?.filter((movie) => {
    return movie?.title?.toLowerCase().includes(search.toLowerCase());
  });

  const filteredTv = tvpopular?.results?.filter((tv) => {
    return tv?.name?.toLowerCase().includes(search.toLowerCase());
  });

  if (search !== "") {
    return (
      <Box whiteSpace={"nowrap"} overflowX={"auto"}>
        <Box>
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

          {filteredFilm?.map((film, index) => {
            return (
              <Box
                key={"film" + index}
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

        <Box>
          <Heading
            as="h3"
            size="md"
            textAlign={"left"}
            color={"white"}
            my={"5px"}
            mt={"30px"}
          >
            tv cercate
          </Heading>

          {filteredTv?.map((tv, index) => {
            return (
              <Box
                key={"tv" + index}
                m="4px"
                w={"250px"}
                h={"140px"}
                overflow={"hidden"}
                d={"inline-block"}
                borderRadius={"5px"}
                color={"white"}
              >
                {tv?.name}
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  }

  return (
    <>
      <OverCard idCard={idCard} features={features} />

      {fetchCall.map((call, index) => {
        if (!call?.dataFetch) {
          return null;
        }
        return (
          <Box
            key={"call" + index}
            overflowX={"auto"}
            position={"relative"}
            textAlign={"left"}
          >
            <Heading
              as="h3"
              size="md"
              textAlign={"left"}
              color={"white"}
              my={"5px"}
              mt={"30px"}
              ml={""}
            >
              {call?.heading}
            </Heading>

            <Carousel responsive={responsive}>
              {call?.dataFetch?.results?.map((result, index) => {
                return (
                  <Box key={"result" + index} className="flip-card">
                    <Box
                      className="flip-card-inner"
                      onMouseEnter={(e) => {
                        actionCard(result?.id);
                        setFeatures({
                          left:
                            e.currentTarget.getBoundingClientRect().left +
                            window.scrollX,
                          top:
                            e.currentTarget.getBoundingClientRect().top +
                            window.scrollY,
                          w: e.currentTarget.getBoundingClientRect().width,
                          h: e.currentTarget.getBoundingClientRect().height,
                        });
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={[
                          allId.includes(result.id) ? "visible" : "no-visible",
                        ].join(" ")}
                      />
                      <Image
                        src={
                          "https://image.tmdb.org/t/p/w342" +
                          result?.poster_path
                        }
                        objectFit={"cover"}
                      />
                    </Box>
                  </Box>
                );
              })}
            </Carousel>
          </Box>
        );
      })}
    </>
  );
}

export default CardTv;
