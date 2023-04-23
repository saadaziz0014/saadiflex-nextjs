import React from "react";
import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";
const movie = async () => {
  const url = process.env.URL;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "4a4f6b6cc1msh4ce0cff358a18bap187a2djsn52ffbbd0c9b6",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}></div>
        <h1>Series & Movies</h1>
        <div className={styles.card_section}>
          {main_data.map((cElem) => {
            return <MovieCard key={cElem.id} {...cElem} />;
          })}
        </div>
      </section>
    </>
  );
};

export default movie;
