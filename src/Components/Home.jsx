import astronaut from "../assets/Images/pngwing.com (3).png"
import "./Home.css"
import {motion} from "framer-motion"


const Home = () => {
	
	//animation effect for intro
	const introAppear = {
		offscreen : {opacity : 0},
		onscreen : {
			opacity : 1, 
			transition : {
				type : "spring",
				duration : 8,
				delay : 0.4
			}
		}
	}
	
	//animation effect for intro
	const astronautSlideIn = {
		offscreen : {y : 100, opacity : 0},
		onscreen : {
			y : 0, opacity : 1, 
			transition : {
				type : "spring",
				duration : 8,
				delay : 0.4,
				bounce : 0.6
			}
		}
	}
	
	return (
		  <motion.div id="home" className="home" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.5}} transition={{staggerChildren:0.5}}>
		    <motion.div className="home_intro" variants={introAppear}>
		      <span>Hi there!👋, I'm Jacob Joshua</span>
		      <h1>turning ideas into real life <b>products</b> is my calling</h1>
		      <p>A passionate and dedicated frontend developer with a keen eye for user-centric design and a strong proficiency in web development technologies 👩‍💻</p>
		    </motion.div>
		    <motion.div className="home_img" variants={astronautSlideIn}>
		      <img src={astronaut} alt="astronaut"/>
		    </motion.div>
		  </motion.div>
		)
}

export default Home