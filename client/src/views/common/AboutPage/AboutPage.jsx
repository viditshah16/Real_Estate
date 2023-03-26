import React from "react";

const AboutPage = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <h2 className="ml-auto mr-auto">About Us</h2>
        <div className="jumbotron mt-3">
          <h3 className="display-6">Student At Dharmsinh Desai University</h3>
          <p className="lead">
            This is a property-selling app where registered users can put
            various types of property to sell and any anonymous user can view
            the details if they showed interest in the property, they can get a
            deal with the seller of the property by registering to the
            application.
            <br />
            Also, a seller can put two options like sell or rent, etc. seller
            can add more than one photo to show to any user.
            <br />
            User has option to filter property and he can also view the nearest
            property located to him. User will be having his own dashboard to
            add/edit property and update his profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
