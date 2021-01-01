import React from "react";

import Header from "./header";
import Footer from "./footer";

const PageLayout = (props) => (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default PageLayout;