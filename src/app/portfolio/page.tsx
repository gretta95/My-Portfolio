import {Breadcrumbs} from "@/components";
import {Portfoliodata} from "@/mockData/portfoliodata";
import Card from "@/components/pages/portfolio/card";
import React from "react";

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="container">
                <Breadcrumbs title="Portfolio"/>
                <div className="mt-[50px]">
                    <div className="grid  gap-x-[30px] gap-y-[50px] grid-cols-3 w-full ">
                        {Portfoliodata.map((data, ind) => {
                            return (
                                <>
                                        <Card key={ind} data={data}/>
                                </>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Portfolio;