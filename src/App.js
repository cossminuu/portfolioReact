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
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    modalOpen: false
  };

  //Modal///////////////
  /*openmodal*/ modalToggleClick = () => {
    document.body.classList.add("no-scroll"); /*add no scroll to body*/
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalToggleClick
      };
    });
  };

  /*closemodal*/ modalCloseClick = () => {
    document.body.classList.remove("no-scroll"); /*remove no scroll from body */
    this.setState({ modalOpen: false });
  };
  //Modal/////////////

  //NAV SIDEBAR ////
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    document.body.classList.remove("no-scroll"); /*remove no scroll from body */
    this.setState({ sideDrawerOpen: false });
  };
  //NAV SIDEBAR ////

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      document.body.classList.add("no-scroll"); /*add no scroll to body*/
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    let modal;
    if (this.state.modalOpen) {
      backdrop = <Backdrop click={this.modalCloseClick} />; //click=close modal
      modal = (
        <Modal click={this.modalToggleClick} close={this.modalCloseClick} />
      );
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
