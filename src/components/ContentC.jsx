import React from 'react';

export function ContentC(){

    return <div>
        <SomeContent />
        <SomeContent />
        <SomeContent />
        <SomeContent />
    </div>
}

function SomeContent(){
    return <div className="flex col-span-4 m-2 border border-slate-400 rounded-md hover:drop-shadow-lg cursor-pointer">
        <img src="https://media.4-paws.org/d/f/a/1/dfa15c65e6228ced973baa89312e053188c2e407/VIER%20PFOTEN_2016-07-08_011-4993x3455-1920x1329.webp" className='w-36 aspect-square rounded-l-md'/>
        <div className="p-4">
            <h1 className='text-xl font-bold text-blue-600'>This is a Dog</h1>
            <h2 className="text-lg tracking-tight leading-3 text-gray-800 mb-2">Hes the goodest boy</h2>
            <h3 className="text-md tracking-wide text-gray-500 bg-slate-200 p-2 rounded-lg">He dun ben bamboozled, ruf, He dun ben bamboozled, ruf, He dun ben bamboozled, ruf, He dun ben bamboozled, ruf</h3>
        </div>
    </div>
}