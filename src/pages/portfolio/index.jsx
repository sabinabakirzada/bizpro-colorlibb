import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BizPro || Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="This is Portfolio Page" />
      </Helmet>
      Portfolio
    </div>
  );
};

export default Portfolio;
