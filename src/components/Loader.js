import React from "react";
import styled from "styled-components";

const Loader = ({className}) => {

    return (
        <div className={className}>
            <img className="loader__img" src="/ironmaiden_loader.gif" alt="loader-image"/>
            <p>
                Loading ..
            </p>
        </div>
    )
}

export const StyledLoader = styled(Loader)`
    width: 100%;
    height: 100%;
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    width: 25%;
    

    
`