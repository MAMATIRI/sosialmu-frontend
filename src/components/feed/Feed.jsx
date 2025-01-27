import CardFeed from "../cardfeed/CardFeed";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post, index) => (
          <CardFeed key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
