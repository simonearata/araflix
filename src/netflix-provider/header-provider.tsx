import React, { createContext, useState, useContext } from "react";
import { FC } from "react";
import { IMovie, ITv } from "../api";

interface IHeaderProvider {}
export interface IHeaderContext {
  setSearch: (search: string) => void;
  setTvpopular: (tv: ITv) => void;
  setMoviepopular: (movie: IMovie) => void;
  setShowOver: (boolean: boolean) => void;
  setVisible: (boolean: boolean) => void;
  search: string;
  tvpopular: ITv | null;
  moviepopular: IMovie | null;
  showOver: boolean;
  visible: boolean;
}

const initialContext: IHeaderContext = {
  setSearch: () => {},
  setTvpopular: () => {},
  setMoviepopular: () => {},
  setShowOver: () => {},
  setVisible: () => {},
  search: "",
  tvpopular: null,
  moviepopular: null,
  showOver: false,
  visible: true,
};

const HeaderContext = createContext<IHeaderContext>(initialContext);

const HeaderProvider: FC<IHeaderProvider> = (props) => {
  const [search, setSearch] = useState<string>("");
  const [tvpopular, setTvpopular] = useState<ITv | null>(null);
  const [moviepopular, setMoviepopular] = useState<IMovie | null>(null);
  const [showOver, setShowOver] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  const HeaderData: IHeaderContext = {
    setSearch,
    setMoviepopular,
    setTvpopular,
    setShowOver,
    setVisible,
    search,
    moviepopular,
    tvpopular,
    showOver,
    visible,
  };

  return (
    <HeaderContext.Provider value={HeaderData}>
      {props?.children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
export const useHeader = () => useContext(HeaderContext);
