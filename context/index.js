import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
    const [username, setUsername] = useState("");
    const [secret, setSecret] = useState("");
    const [created, setCreated] = useState("")

    const values = {
        username,
        setUsername,
        secret,
        setSecret,
        created,
        setCreated
    };


    return <Context.Provider value={values}>{props.children}</Context.Provider>;
};
