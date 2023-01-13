import UserFooter from "components/shared/UserFooter/UserFooter";
import UserDashboard from "components/User-Components/UserDashboard/UserDashboard";
import UserNavbar from "components/User-Components/UserNavbar/UserNavbar";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AboutUs from "views/userViews/AboutUs/AboutUs";
import ContactUs from "views/userViews/ContactUs/ContactUs";
import EventAndNews from "views/userViews/EventAndNews/EventAndNews";
import Transformation from "views/userViews/Transformation/Transformation";

import UserServices from "views/userViews/UserServices/UserServices";

const User = () => {
  return (
    <div>
      
<UserNavbar />
      <Switch>
      
        <Route path="/services" render={() => <UserServices />} />
         <Route path="/event-news" render={() => <EventAndNews />} />
          <Route path="/transformation" render={() => <Transformation />} />
          <Route path="/contact" render={() => <ContactUs />} />
          <Route path="/about" render={() => <AboutUs/>} />
         <Route path="/" render={() => <UserDashboard />} />

      </Switch>

      <UserFooter />
    </div>
  );
};

export default User;
