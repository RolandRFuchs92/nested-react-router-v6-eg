import React from 'react'
import { FaDog, FaCat, FaEarlybirds } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom'

export function StateDrivenNavbar({ activeSelection, setActiveSelection }){

    const handleSetActiveSelection = (value) => 
        () => {
            setActiveSelection(value)
        }

    const isActive = (value) => {
        return value === activeSelection
    }

    return <div className="w-full bg-blue-400 flex flex-row grow items-center p-2 space-x-4">
        <IconText isActive={isActive("dog")} onClick={handleSetActiveSelection("dog")} Icon={<FaDog className='fill-white group-hover:fill-gray-500 text-3xl' />} text="Woofers" />
        <IconText isActive={isActive("bird")} onClick={handleSetActiveSelection("bird")} Icon={<FaEarlybirds className='fill-white group-hover:fill-gray-500 text-3xl'/>} text="Tweeters" />
        <IconText isActive={isActive("cat")} onClick={handleSetActiveSelection("cat")} Icon={<FaCat className='fill-white group-hover:fill-gray-500 text-3xl'/>} text="Meowers" />
    </div>
}


export function RouteDriveNavbar() {    
    const { activeIndex } = useParams()
    const navigate = useNavigate();

    const handleActiveSelection = (actIdx, route) => () => {
        navigate(`/${actIdx}/${route}`)
    }

    return <div className="w-full bg-blue-400 flex flex-row grow items-center p-2 space-x-4">
        <IconText isActive={+activeIndex === 1} onClick={handleActiveSelection(1, "dog")} Icon={<FaDog className='fill-white group-hover:fill-gray-500 text-3xl' />} text="Woofers" />
        <IconText isActive={+activeIndex === 2} onClick={handleActiveSelection(2, "bird")} Icon={<FaEarlybirds className='fill-white group-hover:fill-gray-500 text-3xl'/>} text="Tweeters" />
        <IconText isActive={+activeIndex === 3} onClick={handleActiveSelection(3, "cat")} Icon={<FaCat className='fill-white group-hover:fill-gray-500 text-3xl'/>} text="Meowers" />
    </div>
}

function IconText({ Icon, text, isActive, onClick}){
    return <div 
            onClick={onClick}
            className={`${isActive ? "bg-blue-800 text-white" :""}
            flex
            flex-col
            justify-center
            group
            items-center
            bg-blue-300
            rounded-lg
            p-2
            space-y-2
            cursor-pointer
            hover:shadow-lg`}>
        {Icon}
        <p>{text}</p>
    </div>
}