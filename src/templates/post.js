import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/page-layout";
import TextPost from "../components/post-text";

export const query = graphql`
    query ArticleQuery($slug: String!) {
        strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
            strapiId
            title
            description
            content
            publishedAt
            image {
                publicURL
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
            author {
                name
                picture {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            src
                        }
                    }
                }
            }
        }
    }
`;

const Post = ({data}) => (
    <Layout>
        <TextPost data={data} />
    </Layout>
);

export default Post;