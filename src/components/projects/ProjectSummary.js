import React from "react";
import moment from "moment"; 

const ProjectSummary = ({ project }) => {
	console.log("ProjectSummry start")
	console.log(project);
	console.log("ProjectSummry end")
	return (
		<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{project.title}</span>
				<p>
					Posted by {project.authorFirstName} {project.authorLastName}
				</p>
				<div>{moment(project.createdAt.toDate()).calendar()}</div>
				
			</div>
		</div>
	);
};

export default ProjectSummary;
