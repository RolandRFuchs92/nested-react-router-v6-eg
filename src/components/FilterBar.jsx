import React from 'react';

export function FilterBar(){
    const handleSubmit = e => {
        e.preventDefault();
    }
    
    return <div className="col-span-1 h-full">
        <form onSubmit={handleSubmit} className="bg-green-300 flex flex-col space-y-2 p-2">
            <input type='text' placeholder='Search' className="p-2 rounded-md" />
            <RandomDropdown />
            <RandomDropdown />
            <RandomDropdown />
            <button type="reset" className="bg-transparent text-red-400 border border-red-400 rounded-md p-2 bg-white hover:bg-gray-50">Reset</button>
            <button type="Submit" className="text-white bg-blue-400 hover:bg-blue-600 rounded-md p-2">Submit</button>
        </form>
    </div>
}

function RandomDropdown(){

    return <select type='text' placeholder='Search' className='rounded-md p-2' >
        <option value="0" disabled>Choose something</option>
        <option value="1">Cheese</option>
        <option value="2">Pasta</option>
        <option value="3">Bacon</option>
        <option value="4">Onion</option>
        <option value="5">Apples</option>
        <option value="6">Potato</option>
    </select>
}