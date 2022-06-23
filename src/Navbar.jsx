import "./App.css";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-dark appmac">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
          <span className="navbar-toggler-icon text-white">=</span>
        </button>


        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">

            <li className="nav-item ">
              <Link className="nav-link  text-white" to="/store">store</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-white" to="/mac">Mac</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/ipad">iPad</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/iphone">iPhone</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/watch">Watch</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/airpods">Airpods</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/tv&home">Tv & Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/onlyonapple">only on Apple</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/accessories">Accessories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      


    </>
  )

}
export default Navbar