"use client";

import CardBerita from "@/components/Berita/CardBerita";
import CardNews from "@/components/Berita/CardNews";
import { db } from "@/service/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Berita() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const getNews = collection(db, "berita");

      try {
        const newsSnapshop = await getDocs(getNews);

        const newslist = newsSnapshop.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNews(newslist);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);
  return (
    <main className="pt-36 px-[5%]">
      <h1 className="text-center font-bold text-3xl text-primary mt-4">
        Berita
      </h1>
      <div className="flex gap-4">
        <div className="flex justify-center items-center gap-10 mt-10 w-[70%] flex-wrap">
          {news.map((berita) => (
            <CardNews
              title={berita.title}
              desc={berita.desc}
              body={berita.body}
              img={berita.img}
            />
          ))}
        </div>
        <div className="w-[30%]"></div>
      </div>
    </main>
  );
}
