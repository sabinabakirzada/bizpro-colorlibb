import React, { useEffect, useState } from "react";
import Slider from "./slider";
import Meet from "./meet";
import Latest from "./latest";
import { Helmet } from "react-helmet";
import ProductCard from "./ourabout";
import axios from "axios";
const HomePage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      let res = await axios("https://northwind.vercel.app/api/suppliers");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BizPro || Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="This is Home Page" />
      </Helmet>
      <Slider />
      <ProductCard data={data} getData={getData} setData={setData} />
      <Meet />
      <Latest />
    </div>
  );
};

export default HomePage;
