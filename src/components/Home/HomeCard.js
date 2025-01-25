import React from "react";

function HomeCard() {
    return (
        <blockquote className="blockquote home" style={{ margin:"0" }}>
            <p style={{ fontSize:"1.3em" }} className="text-classic">
                <span className="text-bold">Jake Myers</span>
                <br/>
                Software Engineer | Artist
            </p>
        </blockquote>
  );
}

export default HomeCard;