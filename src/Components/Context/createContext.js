import React, { useState, createContext, useEffect } from "react";

export const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  const [myArray, setMyArray] = useState([]);
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");

  const addToArray = async (item) => {
    setLongUrl(item);
    try {
      const shortenedUrl = await shortenUrl(item);
      if (shortenedUrl !== "") {
        setMyArray((prevArray) => [...prevArray, { long: item, short: shortenedUrl }]);
      }
    } catch (error) {
      alert("Error in shorting url")
    }
  };

  const shortenUrl = async (item) => {
    try {
      const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: "Bearer 1b9ce565e904c893dface2110bf96ddfd71e8d2a", 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: item }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      return data.link !== "" ? data.link : "";
    } catch (error) {
      alert("Error in shorting url")
      throw error;
    }
  };

  useEffect(() => {
  }, [myArray]);

  return (
    <MyContext.Provider value={{ myArray, addToArray, longUrl, shortUrl }}>
      {children}
    </MyContext.Provider>
  );
};




