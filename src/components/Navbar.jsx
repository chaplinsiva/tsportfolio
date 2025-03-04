import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter} from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-16" src={logo} alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
         <a href="https://www.linkedin.com/in/chaplinsiva/"> <FaLinkedin/></a>
          <a href="https://github.com/chaplinsiva"><FaGithub/></a>
         <a href="https://x.com/CHAPLINSIVAOFF"> <FaSquareXTwitter/></a>
          <a href="https://www.instagram.com/san.chaplin.siva/"><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar