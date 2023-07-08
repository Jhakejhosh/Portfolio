import programmer from "../assets/Images/pngwing.com (1).png"
import "./Project.css"
import {AiFillGithub} from "react-icons/ai"
import {FiExternalLink} from "react-icons/fi"
import {projectLists} from "../assets/Data/Data.jsx"
import {motion} from "framer-motion"


const Project = () => {
	
	//animation effect for project
	const projectSlideIn = {
		offscreen : {x : -100, opacity : 0},
		onscreen : {
			x : 0, opacity : 1, 
			transition : {
				type : "spring",
				duration : 2,
			}
		}
	}
	
	return (
	    <div id="projects" className="project">
	      <h2>Check out my recent projects</h2>
	      <p>Here are few recent projects I've worked on🚀. These projects were developed using my phone (Acode + Termux)📱</p>
	      <div className="project_work">
	        {projectLists.map(list => {
	        	const {id, name, image, url, github, tools} = list;
	        	return (
	        		  <motion.div className="each_project" key={id} variants={projectSlideIn} initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.3}}>
	        		    <img src={image} alt={name}/>
	        		    <div className="project_link">
	        		      <span><a href={url}>live url<FiExternalLink/></a></span>
	        		      <span><a href={github}>view code<AiFillGithub/></a></span>
	        		    </div>
	        		    <h3>{name}</h3>
	        		    <div className="project_tools">
	        		      {tools.map(tool => {
	        		      	const {id, tool_name} = tool;
	        		      	return (
	        		      		  <span key={id}>{tool_name}</span>
	        		      		)
	        		      })}
	        		    </div>
	        		  </motion.div>
	        		)
	        })}
	      </div>
	    </div>	
		)
}

export default Project