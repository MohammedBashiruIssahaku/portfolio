import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import logo from "../assets/logo.png"


const NavBar = () => {
  return (
    <nav className="flex items-center  justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home"></a>
              <img src={logo} alt="logo " className="h-10 mx-2 width={50}  bg-gray-400 rounded-3xl cursor-pointer" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">

            <a href="www." target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn">
                <FaLinkedin/>
            </a>

            <a href="www." target="_blank" rel="noopener noreferrer"
            aria-label="Github">
                <FaGithub/>
            </a>

            <a href="www." target="_blank" rel="noopener noreferrer"
            aria-label="Instagram">
                <FaInstagram/>
            </a>

            <a href="www." target="_blank" rel="noopener noreferrer"
            aria-label="Twitter">
                <FaSquareXTwitter/>
            </a>



        </div>


    </nav>
  )
}

export default NavBar
