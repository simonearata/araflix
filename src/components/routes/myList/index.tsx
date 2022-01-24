import { Box, Image } from "@chakra-ui/react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import CardDetails from "../../../card-tv/card-details";
import { useHeader } from "../../../netflix-provider/header-provider";
import "../../../theme/style.css";

function MyList() {
  const {
    listFilm,
    setListFilm,
    idDetails,
    setIdDetails,
    detailsCard,
    setDetailsCard,
  } = useHeader();

  useEffect(() => {
    localStorage.setItem("listFilm", JSON.stringify(listFilm));
  }, [listFilm]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deleteFilm = (id: number) => {
    let cleanArray = [...listFilm].filter((tv) => {
      if (id === tv.id) {
        return false;
      }
      return true;
    });
    setListFilm(cleanArray);
  };

  const activeDetails = (id: number) => {
    setIdDetails(id);
    setDetailsCard(true);
  };

  console.log(detailsCard);

  return (
    <>
      <Box pt={"68px"} h={"100vh"}>
        {detailsCard && <CardDetails />}
        <Box color={"white"}>
          {listFilm.map((tv) => {
            return (
              <Box
                className="card-wish"
                onClick={() => {
                  activeDetails(tv.id);
                }}
              >
                <Box className="">
                  <Box
                    className="visible"
                    onClick={() => {
                      deleteFilm(tv.id);
                    }}
                    d={"inline-block"}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Box>
                  <Image
                    src={"https://image.tmdb.org/t/p/w342" + tv?.poster_path}
                    objectFit={"cover"}
                  />
                </Box>
              </Box>
            );

            {
              /* <Box color={"white"}>
              {tv.name}{" "}
              <Box
                onClick={() => {
                  deleteFilm(tv.id);
                }}
                d={"inline-block"}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </Box>
            </Box> */
            }
          })}
        </Box>
      </Box>
    </>
  );
}

export default MyList;
