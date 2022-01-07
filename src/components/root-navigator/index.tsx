import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Header from "../header";
import Film from "../routes/film";
import Home from "../routes/home";
import MyList from "../routes/myList";
import NewFilm from "../routes/newFilm";
import SerieTv from "../routes/serieTv";

function NetflixDash() {
  const [visible, setVisible] = useState<boolean>(true);
  const [user, setUser] = useState<string>("");

  const account = [{ nome: "Simone Arata" }, { nome: "Luca Nisi" }];

  const useraccess = (string: string) => {
    setVisible(false);
    setUser(string);
  };

  return (
    <Box bgColor={"black"}>
      {visible && (
        <Box bgColor={"black"} h={"100vh"} position={"relative"}>
          <Box w="80px" p={"5px"}>
            <Image src={"araflix.png"} alt="logo" />
          </Box>

          <Heading as="h2" size="xl" color={"white"}>
            Chi vuole guardare netflix?
          </Heading>
          <Box
            w={"320px"}
            h={"150px"}
            display={"flex"}
            position={"absolute"}
            left={"50%"}
            top={"50%"}
            transform={"auto"}
            translateX={"-50%"}
            translateY={"-50%"}
          >
            {account?.map((user) => {
              return (
                <Button
                  w={"100%"}
                  h={"100%"}
                  mr={"10px"}
                  onClick={() => useraccess(user.nome)}
                >
                  {user.nome}
                </Button>
              );
            })}
          </Box>
        </Box>
      )}

      {!visible && <Header user={user} />}

      {!visible && (
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/serietv" element={<SerieTv />} />

            <Route path="/film" element={<Film />} />

            <Route path="/newfilm" element={<NewFilm />} />

            <Route path="/mylist" element={<MyList />} />
          </Routes>
        </Box>
      )}
    </Box>
  );
}

export default NetflixDash;
