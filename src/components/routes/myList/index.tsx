import { AspectRatio, Box, Image } from "@chakra-ui/react";
import { dataAttr } from "@chakra-ui/utils";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { fetchApi, ITrailer } from "../../../api";
import CardDetails from "../../../card-tv/card-details";
import { useHeader } from "../../../netflix-provider/header-provider";
import "../../../theme/style.css";

interface IMovieData {
  id: number;
  name: string;
  cover: string;
  type: string;
}

function MyList() {
  const {
    listFilm,
    setListFilm,
    idDetails,
    setIdDetails,
    detailsCard,
    setDetailsCard,
    listMovie,
    setListMovie,
    setTrailer,
    trailer,
  } = useHeader();

  useEffect(() => {
    localStorage.setItem("listFilm", JSON.stringify(listFilm));
    localStorage.setItem("listMovie", JSON.stringify(listMovie));
  }, [listFilm, listMovie]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deleteFilm = (id: number) => {
    let cleanArrayTv = [...listFilm].filter((tv) => {
      if (id === tv.id) {
        return false;
      }
      return true;
    });
    setListFilm(cleanArrayTv);
    let cleanArrayMovie = [...listMovie].filter((movie) => {
      if (id === movie.id) {
        return false;
      }
      return true;
    });
    setListMovie(cleanArrayMovie);
  };

  const activeDetails = (id: number) => {
    setIdDetails(id);
    setDetailsCard(true);
  };

  console.log(trailer);

  /* const unionArray = [...listMovie, ...listFilm]; */

  let union: IMovieData[] = [];

  listMovie.forEach((movie) => {
    union.push({
      id: movie.id,
      name: movie.original_title,
      cover: movie.poster_path,
      type: "movie",
    });
  });

  listFilm.forEach((serie) => {
    union.push({
      id: serie.id,
      name: serie.name,
      cover: serie.poster_path,
      type: "serie",
    });
  });

  /* listMovie = listMovie.map((e) => {   aggiungere un dato all'interfaccia 
    e.type = "movie"
    return e
  }) */

  return (
    <>
      <Box pt={"68px"} h={"100vh"} maxW={"1200px"}>
        {detailsCard && <CardDetails />}
        <Box color={"white"} d={"flex"} flexWrap={"wrap"}>
          {union.map((item) => {
            return (
              <Box
                className="card-wish"
                onClick={() => {
                  activeDetails(item?.id);
                }}
              >
                <Box className="">
                  <Box
                    className="visible"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteFilm(item.id);
                    }}
                    d={"inline-block"}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Box>
                  <Image
                    src={"https://image.tmdb.org/t/p/w342" + item?.cover}
                    objectFit={"cover"}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default MyList;
