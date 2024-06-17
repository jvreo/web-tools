import { Link } from "react-router-dom";

import Clock from "../assets/images/clock.png";
import Apps from "./Apps.jsx";

function HomeApps() {
  return (
    <>
      <div className="container-home">
        <Apps>
          <Link to="/stopwatch">
            <abbr title="Stopwatch">
              <img src={Clock} alt="clock.png" className="home-icon" />
            </abbr>
          </Link>
          <abbr title="Soon">
            <div>Soon</div>
          </abbr>
          <abbr title="Soon">
            <div>Soon</div>
          </abbr>
          <abbr title="Soon">
            <div>Soon</div>
          </abbr>
          <abbr title="Soon">
            <div>Soon</div>
          </abbr>
          <abbr title="Soon">
            <div>Soon</div>
          </abbr>
          <abbr title="Soon">
            <div>Soon</div>
          </abbr>
          <abbr title="Soon">
            <div>Soon</div>
          </abbr>
          <abbr title="Soon">
            <div>Soon</div>
          </abbr>
        </Apps>
      </div>
    </>
  );
}

export default HomeApps;
