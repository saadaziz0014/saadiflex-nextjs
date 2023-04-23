import React from "react";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";
const MovieCard = (cElem) => {
  const { id, title, type, synopsis } = cElem.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={cElem.jawSummary.backgroundImage.url}
            alt="My Card"
            width={260}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h1>{title.substring(0, 18)}</h1>
          <p>{synopsis.substring(0, 66)}</p>
          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
