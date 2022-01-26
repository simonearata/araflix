import { Box, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box mt={"50px"} pb={"50px"}>
      <HStack
        justifyContent={"space-between"}
        mx={"auto"}
        px={"25%"}
        fontSize={"12px"}
        alignItems={"baseline"}
      >
        <Box>
          <UnorderedList
            color={"white"}
            listStyleType={"none"}
            textAlign={"left"}
            spacing={"15px"}
          >
            <ListItem>Audio e sottotitoli</ListItem>
            <ListItem>Media Center</ListItem>
            <ListItem>Privacy</ListItem>
            <ListItem>Contattaci</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList
            color={"white"}
            listStyleType={"none"}
            textAlign={"left"}
            spacing={"15px"}
          >
            <ListItem>Audiodescrizione</ListItem>
            <ListItem>Rapporti con gli investitori</ListItem>
            <ListItem>Note legali</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList
            color={"white"}
            listStyleType={"none"}
            textAlign={"left"}
            spacing={"15px"}
          >
            <ListItem>Centro assistenza</ListItem>
            <ListItem>Opportunità di lavoro</ListItem>
            <ListItem>Preferenza per i cookie</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList
            color={"white"}
            listStyleType={"none"}
            textAlign={"left"}
            spacing={"15px"}
          >
            <ListItem>Carte regalo</ListItem>
            <ListItem>Condizioni di utilizzo</ListItem>
            <ListItem>Informazioni sull'azienda</ListItem>
          </UnorderedList>
        </Box>
      </HStack>
    </Box>
  );
}

export default Footer;
