import{Link, Routes, Route} from "react-router-dom";
import "./App.css";
import Catalogue from "./Catalogue";
import Accounts from "./Accounts";
import Movieinfo from "./Movieinfo";

const App = () => {
  return (
    <div className="wrapper">
      <header>
      
        <Link to="/" >  
        {/* link is just an anchor tag without the annoyance of refreshing the page which is unnecessary in a single page application  */}
          <h1>Hackflix</h1> 
        {/* link component allows you to implement anchor tag behaviour while defining routing logic within your react component  */}
        </Link>
      </header>

      {/* define our routing configuration logic here. THIS IS WHERE WE DEFINE AT WHICH SPECIFIC ROUTES (URL ENDPOINTS) WE WISH TO RENDER WHICH SPECIFIC COMPONENTS*/}
      {/* always start with routes first, then everything else. you define routes once only*/}
      {/* we use this component to define the PATH at whicfh we wish to render a specific ELEMENT ie component  */}
      {/* below we are saying we only want to see accounts component on home page  */}
      <Routes>
        <Route path="/" element={<Accounts />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/movie/:movieId/" element={<Movieinfo/>} />
              {/* colon means param. no matter what you pass in there it should direct you to movie info  */}
      </Routes>
    </div>
  );
}

export default App;

