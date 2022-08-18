import { BsMusicPlayer } from "react-icons/bs";
import { CgMusic } from "react-icons/cg";
import "./style.css";

const Header = props => {
    return (
        <header className="header flex justify-sb">
            <div >
                <BsMusicPlayer className="logo"/>
            </div>
            <div>
                <CgMusic className="logo"/>
            </div>
        </header>
    );
}

export default Header;