//onAdd.context.jsx

import { createContext, useState } from "react";


//actual value to be accessed (context)
export const OnAddContext = createContext({
    showAddTask: false, 
    setShowAddTask: () => null, 
}); 


//Provided for the context
export const OnAddProvider = ({children}) => {
    const [showAddTask, setShowAddTask] = useState(false); 
    const value = {
        showAddTask, 
        setShowAddTask,
    }
    return <OnAddContext.Provider value={value}>{children}</OnAddContext.Provider>
}

