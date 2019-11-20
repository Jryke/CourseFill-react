/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
// reactstrap components
import { Container } from "reactstrap";
// core components
import UserNavbar from "../components/Navbars/UserNavbar.jsx";
import UserFooter from "../components/Footers/UserFooter.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

import routes from "../routes.js";

class Student extends React.Component {
  state = {
    user: {}
  }
  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token) {
      axios.post(`${process.env.REACT_APP_API_PORT}/auth`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        if (res.data.role === "student") {
          this.props.history.push({
            pathname: `/student/${this.props.location.pathname.split('/')[2]}`
          })
        } else {
          let user = res.data
          this.setState({user})
        }
      })
      .catch(err => {
        console.log(err)
      }) 
    } else {
      this.props.history.push({
        pathname: `/student/${this.props.location.pathname.split('/')[2]}`
      })
    }
  }
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("../assets/img/brand/argon-react.png"),
            imgAlt: "..."
          }}
        />
        <div className="main-content" ref="mainContent">
          <UserNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Container fluid>
            <UserFooter />
          </Container>
        </div>
      </>
    );
  }
}

export default Student;
