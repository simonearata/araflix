import React, { createContext, useState, useContext } from "react";
import { FC } from "react";
import { IMovie, IResult, ITv } from "../api";

interface IHeaderProvider {}
export interface IHeaderContext {
  setSearch: (search: string) => void;
  setTvpopular: (tv: ITv) => void;
  setMoviepopular: (movie: IMovie) => void;
  setShowOver: (boolean: boolean) => void;
  setVisible: (boolean: boolean) => void;
  setListFilm: (IResult: IResult[]) => void;
  search: string;
  tvpopular: ITv | null;
  moviepopular: IMovie | null;
  showOver: boolean;
  visible: boolean;
  listFilm: IResult[];
}

const initialContext: IHeaderContext = {
  setSearch: () => {},
  setTvpopular: () => {},
  setMoviepopular: () => {},
  setShowOver: () => {},
  setVisible: () => {},
  setListFilm: () => {},
  search: "",
  tvpopular: null,
  moviepopular: null,
  showOver: false,
  visible: true,
  listFilm: [],
};

const HeaderContext = createContext<IHeaderContext>(initialContext);

const HeaderProvider: FC<IHeaderProvider> = (props) => {
  const [search, setSearch] = useState<string>("");
  const [tvpopular, setTvpopular] = useState<ITv | null>(null);
  const [moviepopular, setMoviepopular] = useState<IMovie | null>(null);
  const [showOver, setShowOver] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const initialListFilm = localStorage?.getItem("listFilm");
  const parsedList: IResult[] = initialListFilm
    ? JSON.parse(initialListFilm)
    : [];

  const [listFilm, setListFilm] = useState<IResult[]>(parsedList);

  const HeaderData: IHeaderContext = {
    setSearch,
    setMoviepopular,
    setTvpopular,
    setShowOver,
    setVisible,
    setListFilm,
    search,
    moviepopular,
    tvpopular,
    showOver,
    visible,
    listFilm,
  };

  return (
    <HeaderContext.Provider value={HeaderData}>
      {props?.children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
export const useHeader = () => useContext(HeaderContext);
