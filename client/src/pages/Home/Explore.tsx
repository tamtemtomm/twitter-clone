import "./Explore.css";
import Icon from "../../components/Icon";
import Trend from "../../components/Trend/Trend";
import SearchIcon from "../../assets/svg/magnifying-glass-solid.svg";
import { trendList } from "../../components/Trend/TrendList";

const Explore = () => {
  return (
    <section className="explore-container">
      <div className="search-bar">
        <Icon
          element={SearchIcon}
          scale="0.35"
          text="Home"
          width="2.5rem"
        ></Icon>
        Search
      </div>
      <div className="subscribe-container">
        <h1>Subscribe to Premium</h1>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button>Subscribe</button>
      </div>
      <div className="trend-container">
        <h1>Trends For You</h1>
        {trendList?.map((trend) => (
          <Trend {...trend} />
        ))}
      </div>
    </section>
  );
};

export default Explore;
