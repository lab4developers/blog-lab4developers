import React from "react";

const PostCard = () => (
    <div className="bg-color-white rounded-lg shadow-xl border border-gray-100">
        <dl>
            <div className="text-center p-10">Figura</div>
            <div className="font-medium leading-8 tracking-wide text-lg text-gray-700 mx-2 px-3 pt-3">
                <dt>Título</dt>
            </div>
            <div className="text-base text-gray-500 mx-2 px-3 py-2 pb-3">
                <dd>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </dd>
            </div>
        </dl>
    </div>
);

export default PostCard;