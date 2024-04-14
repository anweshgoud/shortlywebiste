import React, { useState, createContext } from "react";

export const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  const [myArray, setMyArray] = useState([]);
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");

  const addToArray = async (item) => {
    setLongUrl(item);
    await shortenUrl(item);
    console.log(myArray);
  };

  const shortenUrl = async (item) => {
    try {
      const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          "Authorization": "1b9ce565e904c893dface2110bf96ddfd71e8d2a",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: item }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      if (data.link !== "") {
        setMyArray(myArray=>[...myArray,{long:item,short:data.link}]);
      }
      console.log(myArray);
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <MyContext.Provider value={{ myArray, addToArray, longUrl, shortUrl,shortenUrl }}>
      {children}
    </MyContext.Provider>
  );
};
