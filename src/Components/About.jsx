import programmer from "../assets/Images/pngwing.com (1).png"
import "./About.css"
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import {techs} from "../assets/Data/Data.jsx"
import {motion} from "framer-motion"


const About = () => {
	
	//animation effect for about intro
	const aboutIntroSlideIn = {
		offscreen : {y : 100, opacity : 0},
		onscreen : {
			y : 0, opacity : 1, 
			transition : {
				type : "spring",
				duration : 3
			}
		}
	}
	//animation effect for about image
	const aboutShowUp = {
		offscreen : {scale : 0, opacity : 0},
		onscreen : {
			scale : 1, opacity : 1, 
			transition : {
				type : "spring",
				duration : 3,
			}
		}
	}
	
	
	return (
		  <div id="about" className="about">
		    <motion.div className="about_intro" variants={aboutIntroSlideIn} initial="offscreen" whileInView="onscreen" viewport={{once: true, amount:0.2}} transition={{staggerChildren:0.3}}>
		      <h2>Get to know more about me ?</h2>
		      <p>I'm Jacob Joshua, a frontend developer with a <b>strong passion</b> for creating exceptional digital experiences. With a blend of technical expertise and a creative mindset, I strive to bridge the gap between <b>design and development</b>, <b>crafting intuitive</b> and <b>visually stunning websites</b> that leave a lasting impact<br/><br/>When I'm not coding, you can find me immersed in various creative pursuits. I enjoy <b>reading self improvement books</b>, <b>exploring updates on technology</b>, and <b>experimenting with different design tools</b>. These activities not only provide me with inspiration but also help me approach development from a holistic perspective, blending aesthetics and functionality seamlessly.</p>
		      <span className="more_info">
		        <a href="https://www.linkedin.com/in/jacobjoshua2483"><AiFillLinkedin/></a>
		        <a href="https://github.com/Jhakejhosh"><AiFillGithub/></a>
		      </span>
		      <div className="technology">
		        <h3>Technology</h3>
		        <div className="tech_list">{
		        	techs.map(skill => {
		        		const {id, tech, icon} = skill;
		        		
		        		return (
		        			  <div key={id}>
		        			    <span>{icon}</span>
		        			    <p>{tech}</p>
		        			  </div>
		        			)
		        	})
		        }</div>
		      </div>
		      </motion.div>
		      <motion.div className="about_img" variants={aboutShowUp} initial="offscreen" whileInView="onscreen" viewport={{once: true, amount:0.2}} transition={{staggerChildren:0.3}}>
		        <img src={programmer} alt="programmer"/>
		      </motion.div>
		  </div>
		)
}

export default About