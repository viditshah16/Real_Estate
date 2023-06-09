import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  HomePage,
  NotFoundPage,
  PropertyListPage,
  PropertyDetailPage,
  AgentProfilePage,
  AboutPage,
  ContactPage
} from "../views/common";
import { RegistrationPage, LoginPage } from "../views/visitor";
import {
  AddPropertyPage,
  Dashboard,
  AgentPropertyListPage,
  EditPropertyPage
} from "../views/agent";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        
  
    <Route exact path="/" component={localStorage.getItem('Email')==null?
    LoginPage:HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />

        <Route path="/agent/dashboard" component={Dashboard} />
        <Route path="/agent/properties" component={AgentPropertyListPage} />
        <Route path="/properties-list" component={PropertyListPage} />
        <Route path="/property-detail/:id" component={PropertyDetailPage} />
        <Route path="/agent-profile/:id" component={AgentProfilePage} />
        <Route path="/agent/add-property" component={AddPropertyPage} />
        <Route path="/agent/edit-property/:id" component={EditPropertyPage} />

        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default Routes;
