"use client";

import "@styles/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Diary() {
  const [diary, setDiary] = useState([]);
  const [isi_diary, setIsiDiary] = useState([]);

  const endpointAPI = "https://6555c14e84b36e3a431e405e.mockapi.io/diaryku";
  async function getAPI () {
      try{
          const res = await fetch(endpointAPI)
          const diary = await res.json()
          console.log(diary)
      }
      catch(error) {
          console.log("error fetching data: ${error}")
      }
  }

  async function getAPI() {
    const res = await axios.get(endpointAPI);
    const res_isi_data = res.data;

    const diary = res_isi_data.map((item) => item.name);
    setDiary(diary);

    const isi_diary = res_isi_data.map((item) => item.isi_diary);
    setIsiDiary(isi_diary);

    // console.log(diary)
    // console.log(isi_diary)
  }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div>
      {diary.length > 0 ? (
        <ul>
          {diary.map((item, idx) => (
            <Link href={`/diary/${item}/${isi_diary[idx]}`}>
            <li key = {idx}>
              <div className="diary-container">
                <h1>{diary[idx]}</h1>
                <p className="p-diary">{isi_diary[idx]}</p>
              </div>
            </li>
            </Link>
          ))}
        </ul>
      ) : (
        "API is loading"
      )}
    </div>
  );
}
