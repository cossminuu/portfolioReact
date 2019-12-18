import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import Header from "./Components/Header";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Portfolio from "./Components/Portfolio";
import Modal from "./Components/Modal/Modal";
import data from './data';
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    modalOpen: false,
    projectId: 0,
  };

  //Modal//
  /*openmodal*/ modalToggleClick = (projectId) => {
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalToggleClick,
        projectId
      };
    });
  };

  /*closemodal*/ modalCloseClick = () => {
    this.setState({ modalOpen: false });
  };
  //Modal//

  //NAV SIDEBAR//
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  //NAV SIDEBAR//

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    let modal;
    if (this.state.modalOpen) {
      backdrop = <Backdrop click={this.modalCloseClick} />; //click=close modal
      modal = <Modal project={data.portfolio[this.state.projectId]} close={this.modalCloseClick} />;
    }

    return (
      <React.Fragment>
        {backdrop}
        {modal}
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />

        <SideDrawer
          show={this.state.sideDrawerOpen}
          click={this.backdropClickHandler}
        />

        <Header name="Cosmin Dumitriu" job="Web Developer" />

        <About />

        <Experiences />

        <Portfolio click={this.modalToggleClick} />
      </React.Fragment>
    );
  }
}

export default App;
