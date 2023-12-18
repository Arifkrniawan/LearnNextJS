"use client";

import HeaderMenu from "@/component/util/header_menu";
import Pagination from "@/component/util/pagination";
import AnimeList from "@/component/util/animelist";
import { useEffect, useState } from "react";

type Anime = {
  images: {
    webp: {
      image_url: string;
    };
  };
  title: string;
  // Add other properties/types as needed from the 'topAnime' structure
};

export default function Product() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState<{ data: Anime[] }>({ data: [] });

  const fetchData = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/anime?page=${page}`
    );
    const animee = await response.json();

    setTopAnime(animee);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu page={page}/>
      <AnimeList api={topAnime}/>
      <Pagination page={page} setPage={setPage} />
    </>
  )
}
