import React from "react";
import hero from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const Hero = ({ title, imageU }) => {
  return (
    <main className={hero.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={hero.hero_content}>
            <h1>{title}</h1>
            <p>Number 1 site for watching movies</p>
            <Link href="/movie">
              <button>Explore</button>
            </Link>
          </div>
          <div className={hero.hero_image}>
            <Image src={imageU} alt="Image" width={500} height={500} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
