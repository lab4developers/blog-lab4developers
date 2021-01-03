import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const PostCard = ({ article }) => (
    <div className="bg-color-white rounded-lg shadow-xl border border-gray-100">
        <dl>
            <Link to={`/post/${article.node.slug}`}>
                <Img fluid={article.node.image.childImageSharp.fluid} className="p-10" />
            </Link>

            <Link to={`/post/${article.node.slug}`}>
                <div className="font-medium leading-8 tracking-wide text-lg text-gray-700 mx-2 px-3 pt-3">
                    <dt>{article.node.title}</dt>
                </div>
            </Link>
            
            <div className="text-base text-gray-500 mx-2 px-3 py-2 pb-3">
                <dd>
                    {article.node.description}
                </dd>
            </div>
        </dl>
    </div>
);

export default PostCard;