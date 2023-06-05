import React from "react";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import "./Portfolio.css";

function Portfolio({ portfolio }) {

    return (
        <>
            <h1 className="tittle">Portfólio</h1>

            <main>

                {portfolio.map(
                    (item, index) =>
                        <ItemPortfolio
                            key={index}
                            link={item.link}
                            image={item.image}
                            title={item.title}
                        ></ItemPortfolio>
                )}

            </main>
        </>
    )
}

export default Portfolio