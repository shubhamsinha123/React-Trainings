import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/sample.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Contributed developer's</h3>
                        
                    </div>
                </div>
                <div className="Developer-profileDetails">
                   <p>A software enginner who got a chance to present himself infront of this whole world.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"#"} title={"NA"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"NA"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"NA"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"NA"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"NA"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;