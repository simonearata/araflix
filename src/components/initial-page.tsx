import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";

function InitialPage() {
  return (
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
        left={"33%"}
        bottom={"37%"}
      >
        <Button w={"100%"} h={"100%"} mr={"10px"}>
          Simone Arata
        </Button>
        <Button w={"100%"} h={"100%"} ml={"10px"}>
          Luca Nisi
        </Button>
      </Box>
    </Box>
  );
}

export default InitialPage;
