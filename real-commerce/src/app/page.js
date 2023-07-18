"use client";
import styles from "./page.module.css";
import Search from "@/component/search";
import weatherData from "../component/demyData";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Search weatherData={weatherData} />
      </div>
    </main>
  );
}
