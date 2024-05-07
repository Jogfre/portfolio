import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#d83e40] to-[#db7500] border-b-2 border-[#1a2766]' : 'text-#ADB7BE'


    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton
