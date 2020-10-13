import React, {useState} from 'react'

export const Context = React.createContext();

export function ContextProvider(props) {


    const [name, setName] = useState();
    const [lastName, setLastName] = useState();


    return (
        <Context.Provider
            value={{
                name,
                lastName,
                setName: (name) => setName(name),
                setLastName: (lastName) => setLastName(lastName),

            }}>
            {props.children}
        </Context.Provider>
    )

}
