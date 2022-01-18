import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OverCard from "./over-card";
import "../theme/style.css";
import { useHeader } from "../netflix-provider/header-provider";

export interface IEvent {
  left: number;
  top: number;
  w: number;
  h: number;
}

function CardTv() {
  const { moviepopular, tvpopular, showOver, setShowOver, search } =
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

          {filteredTv?.map((tv) => {
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
      {showOver && <OverCard idCard={idCard} features={features} />}

      {fetchCall.map((call) => {
        if (!call?.dataFetch) {
          return null;
        }
        return (
          <Box overflowX={"auto"} position={"relative"} textAlign={"left"}>
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
                  <Box className="flip-card">
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
