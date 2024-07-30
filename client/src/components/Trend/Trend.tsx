import React from "react";

interface TrendMenuProps {
  location: string;
  title: string;
  posts: string;
}

const Trend = (props: TrendMenuProps) => {
  return (
    <div className="trend-list">
      <h4>Trending di {props.location}</h4>
      <h3>{props.title}</h3>
      <p>{props.posts} posts</p>
    </div>
  );
};

export default Trend;
