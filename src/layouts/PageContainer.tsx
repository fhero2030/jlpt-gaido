import React from "react";
import NavBar from "./NavBar";
import ScreenContainer from "./ScreenContainer";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const PageContainer = (props: Props) => {
  const { children } = props;

  return (
    <>
      <NavBar />

      <ScreenContainer as="main" className=" mx-auto px-8 md:px-16">
        {children}
      </ScreenContainer>

      <Footer />
    </>
  );
};

export default PageContainer;
