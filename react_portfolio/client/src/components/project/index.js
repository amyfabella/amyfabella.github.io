import React from "react";
import "./style.css";

function Project({ title, image, gitHubUrl, deployedUrl }) {
  return (
    <div>
        <h2>{title}</h2>
        
        <img className="card-img" src={image} alt="user thumbnail" />
        {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}

        <p className="h4 pt-3">
        GitHub: <a target="blank" href={gitHubUrl}>{gitHubUrl}</a>
        </p>
        <p className="h4 pt-3">
        Deployed: <a target="blank" href={deployedUrl}>{deployedUrl}</a>
        </p>
    </div>
  );
}

export default Project;