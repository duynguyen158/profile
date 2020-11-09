import React from "react";

import Hero from "./sections/Hero";
import heroData from "./data/header/hero.json";

import Text from "./sections/Text";
import aboutData from "./data/main/about.json";
import farewellData from "./data/main/farewell.json";

import Portfolio from "./sections/Portfolio";
import visualizations from "./data/main/visualizations.json";
import writings from "./data/main/writings.json";
//import portfolioData from "./data/main/portfolio.json";

import footerData from "./data/footer/footer.json";

function App() {
    return (
        <div className="App">
            <div className="header">
                <Hero data={heroData} />
            </div>
            <div className="main">
                <div className="about wrap">
                    <Text data={aboutData} classNames={["about-me"]} />
                    <Text data={farewellData} classNames={["farewell"]} />
                </div>
                <Portfolio data={[visualizations, writings]} />
            </div>
            <div className="footer">
                <Text data={footerData} />
            </div>
        </div>
    );
}

export default App;
// <RadioFancy data={portfolioSelectorData} defaultValue="viz" />
