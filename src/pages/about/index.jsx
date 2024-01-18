import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="portfolio">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BizPro || About</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="This is About Page" />
      </Helmet>
      About
    </div>
  );
};

export default About;
