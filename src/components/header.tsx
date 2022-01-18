import { Box, Button, HStack, Image, Input, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useHeader } from "../netflix-provider/header-provider";

interface IButtonMenu {
  link: string;
  name: string;
}

interface IHeader {
  user: string;
}

function Header(props: IHeader) {
  const { setSearch, setVisible, visible } = useHeader();
  const [visibleSearch, setVisibleSearch] = useState<boolean>(true);

  const search = () => {
    setVisibleSearch(!visibleSearch);
  };

  const buttonMenu: IButtonMenu[] = [
    { link: "/serietv", name: "Serie TV" },
    { link: "/film", name: "Film" },
    { link: "/newfilm", name: "Nuovi e popolari" },
    { link: "/mylist", name: "La mia lista" },
  ];

  return (
    <Box
      h="68px"
      bgColor="#141414"
      d={"flex"}
      color={"white"}
      position={"fixed"}
      w={"100%"}
      justifyContent={"space-between"}
      zIndex={"999"}
    >
      <HStack>
        <Box w="80px" mx={"25px"}>
          <Image src={"araflix.png"} alt="logo" />
        </Box>
        <Link to="/">
          <Button variant="button-menu" fontSize={"12"} px={"4px"}>
            Home
          </Button>
        </Link>

        {buttonMenu.map((button) => {
          return (
            <Link to={button?.link}>
              <Button variant="button-menu" fontSize={"12"} px={"4px"}>
                {button?.name}
              </Button>
            </Link>
          );
        })}
      </HStack>

      <Box lineHeight={"67.99px"} fontSize={"18px"} mx={"30px"}>
        {visibleSearch && (
          <Box>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ margin: "0 10px" }}
              onClick={search}
            />
            <FontAwesomeIcon icon={faBell} style={{ margin: "0 10px" }} />
            <Text
              display={"inline-block"}
              onClick={() => {
                setVisible(true);
              }}
            >
              {props?.user}
            </Text>
          </Box>
        )}
        {!visibleSearch && (
          <HStack mt={"12px"}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ margin: "0 10px" }}
              onClick={search}
            />
            <Input
              placeholder="Titoli, persone, generi"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearch(e?.target.value);
              }}
              color={"white"}
            />
          </HStack>
        )}
      </Box>
    </Box>
  );
}

export default Header;
