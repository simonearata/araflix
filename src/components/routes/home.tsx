import { Box, Button, Heading, Image, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchApi, IMovie, ITv } from "../../api";
import CardMovie from "../../card-movie";
import CardTv from "../../card-tv";

function Home() {
  const [search, setSearch] = useState<string>("");

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
      <Input
        placeholder="Titoli, persone, generi"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e?.target.value);
        }}
        color={"white"}
      />
      <Box position={"absolute"} top={"26%"} left={"4%"}>
        <Heading size={"lg"} color={"yellow"}>
          Star wars
        </Heading>
        <Button m={"5px"}>Riproduci</Button>
        <Button m={"5px"}>Altre info</Button>
      </Box>
      <Box /* pos={"absolute"} bottom={"-78px"} left={"54px"} */>
        <Box>
          {/* {search !== "" &&
            searchFilm(search)?.map((film) => {
              return (
                <Box
                  m="4px"
                  w={"250px"}
                  h={"140px"}
                  overflow={"hidden"}
                  d={"inline-block"}
                  borderRadius={"5px"}
                >
                  <Image
                    src={"https://image.tmdb.org/t/p/w342" + film?.poster_path}
                  />
                </Box>
              );
            })} */}
        </Box>

        <CardTv />

        <CardMovie string={search} />
      </Box>
    </Box>
  );
}

export default Home;
