import logo from './assets/account-logo.png';
import {Link} from "react-router-dom";

const Accounts = () => {
    return (
        <section className="accountPage">
            <p className="title">Who's watching</p>
            <Link to="/catalogue">
              <img src={logo} alt="profile avatar of a raccoon" />
              <p>Trash Panda</p>
            </Link>
           
        </section>
    )
}

export default Accounts;