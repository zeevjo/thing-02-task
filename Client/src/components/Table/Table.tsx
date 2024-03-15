import React, { useEffect, useState } from "react";
import "./table.css";

const Table = () => {
  const [songs, setSongs] = useState([]);

  const API_URL = "http://localhost:3000/songs";
  interface Song {
    band: string;
    songname: string;
    year: number;
  }
  // Fetch music data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setSongs(data);

        console.log("data", data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Music Library</h2>
      {/* Future Search Bar Here */}
      <table>
        <thead>
          <tr>
            <th>Band Name</th>
            <th>Song Name</th>
            <th>Year Released</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song: Song, index) => (
            <tr key={index}>
              <td>{song.band}</td>
              <td>{song.songname}</td>
              <td>{song.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
