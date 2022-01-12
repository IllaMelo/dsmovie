import {ReactComponent as GithubIcon} from '../icons/github-icon.svg';
import './style.css';
function Navbar(){
    return(
    <header>
     <nav className="container">
       <div className='dsmovie-nav-content'>
         <h1>DSMovie</h1>
         <a href="https://github.com/IllaMelo">
         <div className="dsmovie-contact-container">
           <GithubIcon/>
           <p className="dsmovie-contact-link">/IllaMelo</p>
         </div>
         </a>
       </div>
     </nav>
   </header>
    )
}
export default Navbar;