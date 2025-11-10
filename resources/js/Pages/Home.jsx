import React from "react";
import MainLayout from "../Layouts/MainLayout";
import PageLayout from "../Layouts/PageLayout";

function Home() {
    return <PageLayout header={"Home"}>Hello world</PageLayout>;
}

// Home.layout = (page) => <MainLayout children={page} />;
export default Home;
