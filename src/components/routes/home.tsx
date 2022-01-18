import { Box, Button, Heading, Image, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchApi, IMovie, ITv } from "../../api";
import CardTv from "../../card-tv";
import { useHeader } from "../../netflix-provider/header-provider";

function Home() {
  const { setMoviepopular, setTvpopular } = useHeader();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchApi<ITv>("tv/popular")
      .then((data) => {
        setTvpopular(data);
      })
      .catch((err) => {
        setError(true);
      });
    fetchApi<IMovie>("movie/popular")
      .then((data) => {
        setMoviepopular(data);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);
  /* const searchTv = (tv: string) => {
    return tvpopular?.results?.filter((tv) => {
      return (
        <Box
          m="4px"
          w={"250px"}
          h={"140px"}
          overflow={"hidden"}
          d={"inline-block"}
          borderRadius={"5px"}
        >
          <Image src={"https://image.tmdb.org/t/p/w342" + tv?.poster_path} />
        </Box>
      );
    });
  }; */

  /* const searchFilm = (string: string) => {
    return moviepopular?.results?.filter((movie) => {
      if (!movie?.title?.includes(string?.toLocaleLowerCase())) return false;
      return true;
    });
  }; */

  return (
    <Box w={"100%"} pos={"relative"}>
      <Image src={"darth-vader2.jpg"} w={"100%"} />

      <Box position={"absolute"} top={"26%"} left={"4%"}>
        <Heading size={"lg"} color={"yellow"}>
          Star wars
        </Heading>
        <Button m={"5px"}>Riproduci</Button>
        <Button m={"5px"}>Altre info</Button>
      </Box>

      <CardTv />
    </Box>
  );
}

export default Home;
