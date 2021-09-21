import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeam } from "../../Services/Redux/Actions";
import "./Team.scss";

class Team extends Component {
  componentDidMount() {
    this.props.fetchTeam();
  }

  render() {
    return <div className="team">TEAM PAGE WORKS!</div>;
  }
}

const mapStatetoProps = (state) => {
  console.log(state.team);
  return {};
};

export default connect(mapStatetoProps, { fetchTeam })(Team);
