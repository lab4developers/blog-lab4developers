import React from "react";

import PostCard from "./post-card";

const TablePosts = () => (
    <div className="grid grid-cols-3 justify-items-center p-10 px-32 gap-x-12 gap-y-10">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
);

export default TablePosts;