import React from "react";

// components
import Topbar from "./topBar";
import PageHeader from "./pageHeader";
import Charts from "./chartRow";
import Contents from "./contentRow";

const MainContent = () => {
    return (
        <>
            <div id="content">
                <Topbar />
                {/* Page content */}
                <div className="container-fluid">
                    <PageHeader />
                    <Charts />
                    <Contents />
                </div>
            </div>
        </>
    )
}

export default MainContent;