"use client";
import styles from "./page.module.css";
import Search from "@/component/search/Search";
import weatherData from "../component/demyData";
import NavBar from "@/component/navigation/NavBar";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <main className={styles.main}>
      <NavBar />
      <Home />
    </main>
  );
}
