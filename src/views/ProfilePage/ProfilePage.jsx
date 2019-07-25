/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/PhotoCamera";
import Work from "@material-ui/icons/Work";
//import Project from "@material-ui/icons/Folder";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import SmallChips from "components/Chip/Chips.jsx";
//import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";

import work1 from "assets/img/examples/work-1.jpg";
import work2 from "assets/img/examples/work-2.jpg";
import work3 from "assets/img/examples/work-3.jpg";
import work4 from "assets/img/examples/work-4.jpg";
import work5 from "assets/img/examples/work-5.jpg";

// import work1 from "assets/img/examples/olu-eletu.jpg";
// import work2 from "assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
// import work4 from "assets/img/examples/mariya-georgieva.jpg";
// import work5 from "assets/img/examples/clem-onojegaw.jpg";

import photo1 from "assets/img/examples/photo-1.jpg";
import photo2 from "assets/img/examples/photo-2.jpg";
import photo3 from "assets/img/examples/photo-3.jpg";
import photo4 from "assets/img/examples/photo-4.jpg";
import photo5 from "assets/img/examples/photo-5.jpg";
import photo6 from "assets/img/examples/photo-6.jpg";
import photo7 from "assets/img/examples/photo-7.jpg";
import photo8 from "assets/img/examples/photo-8.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="KV"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Kamesh Vedula</h3>
                      <h5>Student. Developer. Photographer.</h5>
                      <h6>@kvedula</h6>
                      {/* <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button> */}
                      <SmallChips />
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                Hi, I'm Kamesh and I am currently going into my fourth and final undergraduate year at 
                the <b>University of California, Irvine</b> majoring in <b>Computer Science</b>. I am very passionate 
                about the technology and business realms and am constantly on the lookout for dipping my feet in something 
                new.
                {" "}
                </p>
                <p>
                I'm based in the Bay Area as well as Irvine, CA. However, I am in Bellevue, WA this summer for an 
                internship. Feel free to hit me up if you would like to grab a drink or some lunch, 
                it would be my pleasure. 
                {" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Experience",
                        tabIcon: Work,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      // {
                      //   tabButton: "Projects",
                      //   tabIcon: Project,
                      //   tabContent: (
                      //     <GridContainer justify="center">
                      //       <GridItem xs={12} sm={12} md={4}>
                      //         <img
                      //           alt="..."
                      //           src={work1}
                      //           className={navImageClasses}
                      //         />
                      //         <img
                      //           alt="..."
                      //           src={work2}
                      //           className={navImageClasses}
                      //         />
                      //         <img
                      //           alt="..."
                      //           src={work3}
                      //           className={navImageClasses}
                      //         />
                      //       </GridItem>
                      //       <GridItem xs={12} sm={12} md={4}>
                      //         <img
                      //           alt="..."
                      //           src={work4}
                      //           className={navImageClasses}
                      //         />
                      //         <img
                      //           alt="..."
                      //           src={work5}
                      //           className={navImageClasses}
                      //         />
                      //       </GridItem>
                      //     </GridContainer>
                      //   )
                      // },
                      {
                        tabButton: "Photography",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={photo1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={photo2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={photo3}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={photo4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={photo5}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={photo6}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={photo7}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={photo8}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ProfilePage);
