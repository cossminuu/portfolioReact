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
import data from "./data";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    modalOpen: false,
    projectId: 0,
    done: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ done: true });
    }, 3000);
  }
  //Modal//
  /*openmodal*/ modalToggleClick = projectId => {
    this.setState(prevState => {
      document.body.classList.add("no-scroll");
      return {
        modalOpen: !prevState.modalToggleClick,
        projectId
      };
    });
  };

  /*closemodal*/ modalCloseClick = () => {
    document.body.classList.remove("no-scroll");
    this.setState({ modalOpen: false });
  };
  //Modal//

  //NAV SIDEBAR//
  drawerToggleClickHandler = () => {
    document.body.classList.add("no-scroll");
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    document.body.classList.remove("no-scroll");
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
      modal = (
        <Modal
          project={data.portfolio[this.state.projectId]}
          close={this.modalCloseClick}
        />
      );
    }
    let styles = {
      display: "flex",
      height: "100vh",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgb(26, 25, 25)"
    };
    return (
      <>
        {!this.state.done ? (
          <Loader
            style={styles}
            type="Triangle"
            color="#f1636c"
            height={200}
            width={200}
            timeout={3000}
          />
        ) : (
          <>
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
          </>
        )}
      </>
    );
  }
}

export default App;
