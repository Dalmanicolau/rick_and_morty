import SearchBar from "./SearchBar";
import { Link } from "react-router-dom"




const Nav = ({ onSearch }) => {

    return(
        <div>
            <SearchBar onSearch = {onSearch}/>
            <Link to = "/about">
            <h3>ABOUT</h3>
            </Link>
            <Link to = "/home">
            <h3>HOME</h3>
            </Link>
        </div>
    )
}
export default Nav;