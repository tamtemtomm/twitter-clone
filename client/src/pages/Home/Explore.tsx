// Import Style
import "./Explore.css";

//Import Components
import Trend from "../../components/Trend/Trend";
import AccountBox from "../../components/Account/AccountBox";
import { ExploreIconComponent } from "../../components/IconList";

// Import Sinthetic Data
import { trendList } from "../../components/Trend/TrendList";
import { accountRecommendationList } from "../../components/Account/AccountRecommendationList";

const Explore = () => {
  return (
    <section className="explore-container">
      <div className="search-bar">
        <ExploreIconComponent color="white" width=".9rem" />
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
        {trendList?.map((trend, index) => (
          <Trend {...trend} key={index} />
        ))}
      </div>

      <div className="follow-recommendation-container">
        <h1>Recommendation</h1>
        {accountRecommendationList?.map((account, index) => (
          <AccountBox {...account} key={index} />
        ))}
      </div>
      
    </section>
  );
};

export default Explore;
