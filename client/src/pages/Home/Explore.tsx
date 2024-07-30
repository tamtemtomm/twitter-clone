import "./Explore.css";
import Icon from "../../components/Icon";
import SearchIcon from "../../assets/svg/magnifying-glass-solid.svg";

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
    </section>
  );
};

export default Explore;
