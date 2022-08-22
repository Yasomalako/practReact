import React    from "react";
import template from "./home.js";

class home extends React.Component {
  render() {
    return template.call(this);
  }
}

export default home;
