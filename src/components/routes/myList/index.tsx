import { Box } from "@chakra-ui/react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHeader } from "../../../netflix-provider/header-provider";

function MyList() {
  const { listFilm, setListFilm } = useHeader();

  const deleteFilm = (id: number) => {
    let cleanArray = [...listFilm].filter((tv) => {
      if (id === tv.id) {
        return false;
      }
      return true;
    });
    setListFilm(cleanArray);
  };

  console.log(listFilm);

  return (
    <Box pt={"68px"} h={"100vh"}>
      <Box color={"white"}>
        {listFilm.map((tv) => {
          return (
            <Box color={"white"}>
              {tv.name}{" "}
              <Box
                onClick={() => {
                  deleteFilm(tv.id);
                }}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default MyList;
