import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home1";
import NotFound from "pages/NotFound";
import Home1 from "pages/Home1";
import StudyAbroad from "pages/StudyAbroad";
import Software from "pages/Software";
import Migrate from "pages/Migrate";
import EnglishCoaching from "pages/EnglishCoaching";
import Aboutus from "pages/Aboutus";
import HomeOne from "pages/HomeOne";
import Resources from "pages/Resources";
import ContactUs from "pages/ContactUs";
import Enquirepage from "pages/Enquirepage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "studyabroad",
      element: <StudyAbroad />,
    },
    {
      path: "software",
      element: <Software />,
    },
    {
      path: "migrate",
      element: <Migrate />,
    },
    {
      path: "englishcoaching",
      element: <EnglishCoaching />,
    },
    {
      path: "aboutus",
      element: <Aboutus />,
    },
    {
      path: "homeone",
      element: <HomeOne />,
    },
    {
      path: "resources",
      element: <Resources />,
    },
    {
      path: "contactus",
      element: <ContactUs />,
    },
    {
      path: "enquirepage",
      element: <Enquirepage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
