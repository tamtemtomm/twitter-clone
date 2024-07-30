import React from "react";

export const trendList = [
  { location: "Indonesia", title: "Paha", posts: "38.3K" },
  { location: "Indonesia", title: "Syifa", posts: "43.2K" },
  { location: "Indonesia", title: "Merah", posts: "14.3K" },
  { location: "Indonesia", title: "El Rumi", posts: "17.4K" },
  { location: "Global", title: "Venezuela", posts: "1.47M" },
  { location: "Indonesia", title: "Cipel", posts: "11K" },
  { location: "Indonesia", title: "IISMA", posts: "3.102" },
  { location: "Indonesia", title: "Tessy", posts: "8.102" },
  { location: "Global", title: "Ji Chang Wook", posts: "1.1M" },
  { location: "Global", title: "#ใจซ่อนรักEP6", posts: "2.16M" },
];

// interface TrendMenuProps {
//   location: string;
//   title: string;
//   posts: number;
// }

const Trend = () => {
  return (
    <div className="trend-container">
      <h1>Trends For You</h1>
      {trendList?.map((trend) => (
        <div className="trend-list">
          <h4>Trending di {trend.location}</h4>
          <h3>{trend.title}</h3>
          <p>{trend.posts} posts</p>
        </div>
      ))}
    </div>
  );
};

export default Trend;
