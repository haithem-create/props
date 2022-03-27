import React from "react";
import PropTypes from "prop-types";


const ProfileComponent= props => {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
    <div style={mystyle}>
        {props.children}
        {props.handleName()}
        <h1>{props.fullName}</h1>
        <h2>{props.profession}</h2>
        <p> {props.bio}</p>
    </div>
    
    );
    
}
ProfileComponent.propTypes ={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
};

export default ProfileComponent;