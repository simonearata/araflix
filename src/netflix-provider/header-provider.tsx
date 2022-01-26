import React, { createContext, useState, useContext } from "react";
import { FC } from "react";
import { IMovie, IResult, IResultMovie, ITrailer, ITv } from "../api";

interface IHeaderProvider {}
export interface IHeaderContext {
  setSearch: (search: string) => void;
  setTvpopular: (tv: ITv) => void;
  setMoviepopular: (movie: IMovie) => void;
  setShowOver: (boolean: boolean) => void;
  setVisible: (boolean: boolean) => void;
  setListFilm: (IResult: IResult[]) => void;
  setIdDetails: (id: number) => void;
  setDetailsCard: (visibility: boolean) => void;
  setListMovie: (IResultMovie: IResultMovie[]) => void;
  setTrailer: (ITrailer: ITrailer) => void;
  setUser: (Name: string) => void;
  search: string;
  tvpopular: ITv | null;
  moviepopular: IMovie | null;
  showOver: boolean;
  visible: boolean;
  listFilm: IResult[];
  idDetails: number;
  detailsCard: boolean;
  listMovie: IResultMovie[];
  trailer: ITrailer | null;
  user: string;
}

const initialContext: IHeaderContext = {
  setSearch: () => {},
  setTvpopular: () => {},
  setMoviepopular: () => {},
  setShowOver: () => {},
  setVisible: () => {},
  setListFilm: () => {},
  setIdDetails: () => {},
  setDetailsCard: () => {},
  setListMovie: () => {},
  setTrailer: () => {},
  setUser: () => {},
  search: "",
  tvpopular: null,
  moviepopular: null,
  showOver: false,
  visible: true,
  listFilm: [],
  idDetails: 0,
  detailsCard: false,
  listMovie: [],
  trailer: null,
  user: "",
};

const HeaderContext = createContext<IHeaderContext>(initialContext);

const HeaderProvider: FC<IHeaderProvider> = (props) => {
  const [search, setSearch] = useState<string>("");
  const [tvpopular, setTvpopular] = useState<ITv | null>(null);
  const [moviepopular, setMoviepopular] = useState<IMovie | null>(null);
  const [showOver, setShowOver] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [idDetails, setIdDetails] = useState<number>(0);
  const [detailsCard, setDetailsCard] = useState<boolean>(false);
  const [trailer, setTrailer] = useState<ITrailer | null>(null);

  const initialListFilm = localStorage?.getItem("listFilm");
  const parsedList: IResult[] = initialListFilm
    ? JSON.parse(initialListFilm)
    : [];

  const [listFilm, setListFilm] = useState<IResult[]>(parsedList);

  const initialListMovie = localStorage?.getItem("listMovie");
  const parsedListMovie: IResultMovie[] = initialListMovie
    ? JSON.parse(initialListMovie)
    : [];

  const [listMovie, setListMovie] = useState<IResultMovie[]>(parsedListMovie);

  const initialUser = localStorage?.getItem("user");
  const parsedUser: string = initialUser ? JSON.parse(initialUser) : "";
  const [user, setUser] = useState<string>(parsedUser);

  const unionArray = [...listMovie, ...listFilm];

  const HeaderData: IHeaderContext = {
    setSearch,
    setMoviepopular,
    setTvpopular,
    setShowOver,
    setVisible,
    setListFilm,
    setIdDetails,
    setDetailsCard,
    setListMovie,
    setTrailer,
    setUser,
    search,
    moviepopular,
    tvpopular,
    showOver,
    visible,
    listFilm,
    idDetails,
    detailsCard,
    listMovie,
    trailer,
    user,
  };

  return (
    <HeaderContext.Provider value={HeaderData}>
      {props?.children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
export const useHeader = () => useContext(HeaderContext);
