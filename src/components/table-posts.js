import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import PostCard from "./post-card";

const TablePosts = () => {    
    const data = useStaticQuery(query);

    console.log(data);

    return (
        <div className="grid grid-cols-3 justify-items-center p-10 px-32 gap-x-12 gap-y-10">
            {
                data.allStrapiArticle.edges.map((article) => {
                    return (
                        <PostCard article={ article } />
                    );
                })
            }
        </div>
    );
};

const query = graphql`
    query {
        allStrapiArticle (filter: { status: { eq: "published" } }) {
            edges {
                node {
                    id
                    slug
                    strapiId
                    status
                    title
                    description
                    content
                    category {
                        name
                    }
                    image {
                        childImageSharp {
                            fluid {
                                src
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default TablePosts;