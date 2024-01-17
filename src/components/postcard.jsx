import React from "react";
import image from "../assets/fashion.jpg";
import { Link } from "gatsby";
const PostCard = ({ data }) => {
  const date = new Date(data?.createdAt).toDateString();
  return (
    <div className="post-card">
      <img src={data?.blog_image?.[0]} alt="" />
      <div className="post-card-desc">
        <p>{date}</p>
        <h3>
          <Link to={`/blog/${data?.slug}`}>{data?.blog_title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default PostCard;
