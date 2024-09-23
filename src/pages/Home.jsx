import React  from "react";
import NotFound from "./NotFound"; // Import NotFound from its own file
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/home1" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Home1
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/studyabroad" style={{ color: "#87CEFA", textDecoration: "none" }}>
            StudyAbroad
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/software" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Software
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/migrate" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Migrate
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/englishcoaching" style={{ color: "#87CEFA", textDecoration: "none" }}>
            EnglishCoaching
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/aboutus" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Aboutus
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/homeone" style={{ color: "#87CEFA", textDecoration: "none" }}>
            HomeOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/resources" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Resources
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/contactus" style={{ color: "#87CEFA", textDecoration: "none" }}>
            ContactUs
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/enquirepage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Enquirepage
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
