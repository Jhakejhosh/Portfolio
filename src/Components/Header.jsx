import profile from "../assets/Images/pngwing.com (6).png"
import {menuItems} from "../assets/Data/Data.jsx"
import "./Header.css"
import {motion} from "framer-motion"


const NavBar = () => {
	
	//animation effect for NavBar
	const navBarSlideIn = {
		offscreen : {x : 100, opacity : 0},
		onscreen : {
			x : 0, opacity : 1, 
			transition : {
				type : "spring",
				duration : 2,
				bounce : 0.8
			}
		}
	}
	
	//animation effect for profile Image
	const profileSlideIn = {
		offscreen : {y : -100, opacity : 0},
		onscreen : {
			y : 0, opacity : 1, 
			transition : {
				type : "spring",
				duration : 2,
				bounce : 0.6
			}
		}
	}
	
	return (
		  <motion.header initial="offscreen" animate="onscreen" transition={{staggerChildren : 1}}>
		     <motion.img src={profile} alt="profile_img" className="profile_img" variants={profileSlideIn}/>
		     <motion.nav variants={navBarSlideIn}>
		        <ul>{menuItems.map(item => {
		        	const {id, menu, link} = item;
		        	
		        	return (
		        		   <li key={id}><a href={link}>{menu}</a></li>
		        		)
		        })}</ul>
		     </motion.nav>
		  </motion.header>
		)
}

export default NavBar;