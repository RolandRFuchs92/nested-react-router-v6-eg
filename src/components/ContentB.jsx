import React from 'react';

export function ContentB(){

    return <div>
        <SomeContent />
        <SomeContent />
        <SomeContent />
    </div>
}

function SomeContent(){
    return <div className="flex col-span-4 m-2 border border-slate-400 rounded-md hover:drop-shadow-lg cursor-pointer">
            <img src="https://i.natgeofe.com/n/6dd16dba-c55e-4bdc-9165-700c827f08e8/01-secretary-bird-nationalgeographic_2331336.jpg?w=374&h=249" className='w-36 aspect-square rounded-l-md'/>
            <div className="p-4">
                <h1 className='text-xl font-bold text-blue-600'>This is a Dog</h1>
                <h2 className="text-lg tracking-tight leading-3 text-gray-800 mb-2">Hes the goodest boy</h2>
                <h3 className="text-md tracking-wide text-gray-500 bg-slate-200 p-2 rounded-lg">He dun ben bamboozled, ruf, He dun ben bamboozled, ruf, He dun ben bamboozled, ruf, He dun ben bamboozled, ruf</h3>
            </div>
        </div>
}