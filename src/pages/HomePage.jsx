import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Section from "../components/Section/Section.jsx";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
const Home = () => {
  return (
    <>
      <Navbar />
      <Section />
      <div style={{ marginLeft: 100 }}>
        <ProfileInfo
          name={"GitHub"}
          username={"swapnilmulani"}
          email={"2020.swapnil.mulani@ves.ac.in"}
          link={"https://github.com/"}
        />
      </div>
    </>
  );
};
export default Home;
