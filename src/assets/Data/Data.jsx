import cryptlite from "../Images/Screenshot_20230704-191722_1.png"
import foodoo from "../Images/Screenshot_20230707-175628_1.png"
import chillax from "../Images/Screenshot_20230707-175743_1.png"
import {BiLogoReact, BiLogoTailwindCss, BiLogoFirebase, BiLogoCss3, BiLogoJavascript, BiLogoTypescript} from "react-icons/bi"
import {AiFillHtml5, AiFillGithub} from "react-icons/ai"
import {TbBrandNextjs} from "react-icons/tb"


export const menuItems = [
	{
		id : 1,
		menu : "Home",
		link : "#home"
	},
	{
		id : 2,
		menu : "About",
		link : "#about"
	},
	{
		id : 3,
		menu : "Projects",
		link : "#projects"
	},
	{
		id : 4,
		menu : "Contact",
		link : "#contact"
	},
	];

export const projectLists = [
	{
		id : 10,
		name : "Cryptlite",
		image : cryptlite,
		url : "https://cryptlite.netlify.app/",
		github : "https://github.com/Jhakejhosh/Cryptlite",
		tools : [
			{
				id : 100,
				tool_name : "React",
			},
			{
				id : 200,
				tool_name : "Material UI",
			},
			{
				id : 300,
				tool_name : "Coingecko APIs",
			},
			{
				id : 400,
				tool_name : "Firebase",
			},
			]
	},
	{
		id : 20,
		name : "Chillax",
		image : chillax,
		url : "https://chillax-app.netlify.app/",
		github : "https://github.com/Jhakejhosh/chillax",
		tools : [
			{
				id : 100,
				tool_name : "React",
			},
			{
				id : 200,
				tool_name : "IMDB APIs",
			},
			{
				id : 300,
				tool_name : "Firebase",
			}
			]
	},
	{
		id : 30,
		name : "Foodoo",
		image : foodoo,
		url : "https://myfoodoo.netlify.app/",
		github : "https://github.com/Jhakejhosh/foodoo",
		tools : [
			{
				id : 100,
				tool_name : "React",
			},
			{
				id : 200,
				tool_name : "Redux",
			}
			]
	},
	]
	
	
	export const techs = [
		{
			id : 101,
			tech : "HTML5",
		  icon : <AiFillHtml5/>
		},
		{
			id : 102,
			tech : "CSS3",
		  icon : <BiLogoCss3/>
		},
		{
			id : 103,
			tech : "Javascript",
		  icon : <BiLogoJavascript/>
		},
		{
			id : 104,
			tech : "React",
		  icon : <BiLogoReact/>
		},
		{
			id : 105,
			tech : "Tailwind css",
		  icon : <BiLogoTailwindCss/>
		},
		{
			id : 106,
			tech : "Next js",
		  icon : <TbBrandNextjs/>
		},
		{
			id : 107,
			tech : "Typescript",
		  icon : <BiLogoTypescript/>
		},
		{
			id : 108,
			tech : "Firebase",
		  icon : <BiLogoFirebase/>
		},
		{
			id : 109,
			tech : "Git & Github",
		  icon : <AiFillGithub/>
		},
		]