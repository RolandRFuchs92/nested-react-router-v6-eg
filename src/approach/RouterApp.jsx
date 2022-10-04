import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom'

import { AppBar } from "../components/AppBar";
import { FilterBar } from "../components/FilterBar";
import { RouteDriveNavbar } from '../components/Navbar'

import { ContentA } from "../components/ContentA";
import { ContentB } from "../components/ContentB";
import { ContentC } from "../components/ContentC";


export function RouterApp(){

    return <Routes>
        <Route path=":activeIndex" element={<RouterLayout />} >
            <Route path="dog" element={<ContentA />} />
            <Route path="bird" element={<ContentB />} />
            <Route path="cat" element={<ContentC />} />
        </Route>
    </Routes>
}


function RouterLayout() {
    return <div className="border-2 border-black m-4 w-[800px] h-fit">
        <AppBar title="This is the router Approach" />
        <RouteDriveNavbar />
        <div className='grid grid-cols-5'>
            <FilterBar />
            <div className="col-span-4 bg-yellow-300">
                <Outlet />
            </div>
        </div>
    </div>
}