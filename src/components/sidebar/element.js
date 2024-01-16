import { HiMiniSparkles } from "react-icons/hi2"
import { BiSupport } from "react-icons/bi";
import { MdEmojiEvents } from "react-icons/md";

import "./sidebar.css";

const element = [
    {name: "Chat", icon: <HiMiniSparkles className="sidebar-element-icon" />, href: "/"},
    {name: "Hackathon", icon: <MdEmojiEvents className="sidebar-element-icon" />, href: "https://whereuelevate.com/drills/bennett-university-industry-hackathon"},
    {name: "Support", icon: <BiSupport className="sidebar-element-icon" />, href: "/support"},
]

export default element;