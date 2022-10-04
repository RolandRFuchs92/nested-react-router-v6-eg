import React from "react";

import { AppBar } from "../components/AppBar";
import { FilterBar } from "../components/FilterBar";
import { StateDrivenNavbar } from '../components/Navbar'

import { ContentA } from "../components/ContentA";
import { ContentB } from "../components/ContentB";
import { ContentC } from "../components/ContentC";

export function TraditionalApp(){
    const [activeSelection, setActiveSelection] = React.useState("dog");

    const someContent = {
        "dog": <ContentA />,
        "bird": <ContentB />,
        "cat": <ContentC />
    }

    return <div className="border-2 border-black m-4 w-[800px] h-fit">
        <AppBar title="This is the traditional Approach" />
        <StateDrivenNavbar activeSelection={activeSelection} setActiveSelection={setActiveSelection} />
        <div className="grid grid-cols-5">
            <FilterBar />
            <div className="col-start-2 col-span-4 bg-yellow-300">
                {someContent[activeSelection]}
            </div>
        </div>
    </div>
}