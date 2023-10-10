import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import React from "react";
import { ToastContainer } from "react-toastify";

const template = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <ToastContainer />
        <Container className="min-h-[80vh] flex-1">{children}</Container>
      </main>
    </>
  );
};

export default template;
