import { Box, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPlayCircle,
  faPlusCircle,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { IEvent } from ".";
import "../theme/faStyle.css";
import "../theme/style.css";
import { useHeader } from "../netflix-provider/header-provider";

interface IOverCard {
  idCard: number | undefined;
  features: IEvent | undefined;
}

function OverCard(props: IOverCard) {
  const { tvpopular, moviepopular, setShowOver, showOver } = useHeader();
  const [error, setError] = useState<boolean>(false);

  const caratteristiche: string[] = [
    "demenziale",
    "assurdo",
    "suspense",
    "distopico",
    "pesca",
    "docuserie",
    "emozionante",
    "dramma",
    "avvicente",
    "esplosivo",
    "violente",
    "dramma",
    "thriller",
  ];
  // shuffle
  const randomItems = Math.floor(Math.random() * caratteristiche.length);

  const { w, h, left, top } = props?.features || {
    w: 0,
    h: 0,
    left: 0,
    top: 0,
  };

  const dataItems = [
    {
      item: moviepopular,
    },
    {
      item: tvpopular,
    },
  ];

  /*   console.log(top);
  console.log(left); */

  return (
    <>
      {dataItems?.map((items) => {
        return (
          <>
            {items?.item &&
              items?.item.results?.map((result, index) => {
                if (props?.idCard === result.id) {
                  return (
                    <Box
                      position={"absolute"}
                      w={w}
                      h={w}
                      left={left}
                      top={top - h / 2}
                      bgColor={"white"}
                      zIndex={"999"}
                      borderRadius={"5px"}
                      className={[
                        "zoom-box",
                        showOver ? "zoom-in" : "no-events",
                        top < 751 && left < 6 ? "zoom-boxfirst" : "",
                        /* top > 749 && left > 979 ? "zoom-boxlast" : "", */
                      ].join(" ")}
                      onMouseLeave={() => {
                        setShowOver(false);
                      }}
                    >
                      <Box h={"50%"} overflow={"hidden"} borderRadius={"5px"}>
                        <Image
                          src={
                            "https://image.tmdb.org/t/p/w342" +
                            result?.poster_path
                          }
                          objectFit={"cover"}
                        />
                      </Box>

                      <Box
                        color={"black"}
                        d={"flex"}
                        justifyContent={"space-around"}
                        pt={"20px"}
                      >
                        <FontAwesomeIcon
                          icon={faPlayCircle}
                          className="faStyle"
                        />
                        <FontAwesomeIcon
                          icon={faPlusCircle}
                          className="faStyle"
                        />
                        <FontAwesomeIcon
                          icon={faThumbsUp}
                          className="faStyle"
                        />
                        <FontAwesomeIcon
                          icon={faThumbsDown}
                          className="faStyle"
                        />
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="faStyle"
                        />
                      </Box>

                      <Box my={"10px"}>{caratteristiche[randomItems]}</Box>
                    </Box>
                  );
                }
              })}
          </>
        );
      })}
    </>
  );
}

export default OverCard;
