import React from "react";
import Img from "gatsby-image";
import Markdown from "react-markdown";

const TextPost = ({data}) => {
    const article = data.strapiArticle;

    return (<div className="flex flex-row space-x-5">
        <div className="flex flex-col space-y-5 px-52 py-10 w-10/12">
            <h1 className="font-semibold leading-10 tracking-wider text-2xl text-gray-600">
                {article.title}
            </h1>
            
            <div className="flex flex-col space-y-4 text-gray-600">
                <Img fluid={article.image.childImageSharp.fluid} className="p-10" />

                <Markdown source={article.content} escapeHtml={false} />
            </div>
        </div>

        
    </div>);
};

export default TextPost;

/**
 * Sumário retirado por enquanto...
 * <div className="text-gray-500 flex flex-col space-y-1 py-10 w-2/12">
            <h1 className="font-semibold">Sumário</h1>

            <ul>
                <li>asdasdasdas</li>
                <li><span className="pl-2">asdasdasdas</span></li>
                <li>asdasdasdas</li>
                <li>asdasdasdas</li>
                <li>asdasdasdas</li>
            </ul>
        </div>
 * 
 */