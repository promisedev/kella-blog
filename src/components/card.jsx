import React from 'react'
import image from "../assets/fashion.jpg"
import {
  FaRegComment,
  FaXTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { Link } from 'gatsby'; 
const Card = ({data}) => {
    const share = [1,2,3]
    const date = new Date(data?.createdAt).toDateString();
  return (
    <div className="blog-card">
      <img src={data?.blog_image?.[0]} className="blog-card-img" />
      <div className="blog-card-desc">
        <div className="blog-title-cont">
          <p>{data?.category}</p>
          <h2>
            {" "}
            <Link to={`/blog/${data?.slug}`}>{data?.blog_title}</Link>
          </h2>

          <div className="blog-title-foot">
            <p className="blog-date">{date}</p>{" "}
            <p className="blog-author">By {data?.author}</p>
          </div>
        </div>
        {/* --------------------------------- */}

        <p className="blog-desc">{data?.excerpt}</p>
        {/* --------------------footer  */}
        <div className="blog-actions">
          <div className="blog-comment">
            <FaRegComment className="blog-icon" />
            <span>{data?.comment.lenght}</span>
          </div>
          <div className="blog-social">
            <span>share</span>
            <ul className="blog-social-list">
              {share.map((link, index) => (
                <li key={index}>
                  <a href="">
                    {(index == 0 && <FaXTwitter className="blog-icon" />) ||
                      (index == 1 && (
                        <GrFacebookOption className="blog-icon" />
                      )) ||
                      (index == 2 && <FaPinterestP className="blog-icon" />)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* ------------------------------------- */}
      </div>
    </div>
  );
}

export default Card