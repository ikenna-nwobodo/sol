import Nav from "./nav";
import "./home.css";
import Recents from "./recents";

const Home = () => {
  return (
    <div className="main">
      <Nav />
      <div className="section">
        <div className="search">
          <input type="text" placeholder="Search " />
          <span class="material-symbols-rounded">search</span>
        </div>
      </div>
      <div className="main-container">
        <div className="article-container">
          <h1>FAQs</h1>
          <div className="articles">
            <div className="article">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h2>
              {/* <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p> */}
            </div>
            <div className="article">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h2>
              {/* <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p> */}
            </div>
            <div className="article">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h2>
              {/* <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p> */}
            </div>
            <div className="article">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h2>
              {/* <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p> */}
            </div>
            <div className="article">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h2>
              {/* <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p> */}
            </div>
          </div>
        </div>
        <div className="recent-con">
          <h1>Recent Complaints</h1>
          <Recents />
        </div>
      </div>
    </div>
  );
};

export default Home;
