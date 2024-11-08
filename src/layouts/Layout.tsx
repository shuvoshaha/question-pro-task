import React from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "components/navbar/navbar";
import ProfileView from "components/profile/profile-view";
import "./Layout.scss";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Container>
        <NavbarComponent />
        <div className="main__layout">
          <div className="row">{children}</div>
          <div className="row">
            <ProfileView />
          </div>
         
        </div>
      </Container>
    </>
  );
};

export default Layout;
