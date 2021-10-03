import "./theme.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Library from "./pages/Library";
import Account from "./pages/Account";
export default function Theme() {
  return (
    <div className="container">
      <div className="left">Channel</div>
      <div className="middle">
        <div className="middle-main">
          <Router>
            <div className="middle-main-head">
              <div className="middle-main-head-nav">
                <Link to="/">Home</Link>
                <Link to="/community">Community</Link>
                <Link to="/library">Library</Link>
                <Link to="/account">Account</Link>
              </div>
            </div>
            <div className="middle-main-body">
              <Switch>
                <Route path="/" exact>
                  <Redirect to="/home" />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/community">
                  <Community />
                </Route>
                <Route path="/library">
                  <Library />
                </Route>
                <Route path="/account">
                  <Account />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
      <div className="right">TopGamers</div>
    </div>
  );
}
