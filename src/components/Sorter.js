import React, { useState, useEffect }  from "react";
import styled from "styled-components";

const Sorter = ({className, array, setData}) => {
    // keep state of sort type
    const [sortType, setSortType] = useState("ascending");

    useEffect(() => {
        // sorting function for album array
        const sortArray = (type) => {
          
          if(type === "ascending") {
            // sort the array in ascending fashion
            const ascending = [...array].sort((a, b) => b.playcount - a.playcount);
            
            // set data to ascending
            setData(ascending);
          } else {
            // sort the array in descending  fashion
            const descending = [...array].sort((a, b) => a.playcount - b.playcount);
            // set data to descending
            setData(descending);
          }
      
        }
        // sort the array based on type of sort type
        sortArray(sortType);
    
    }, [sortType])
    
    return (
    <select className={className} onChange ={(e) => setSortType(e.target.value)}>
        <option value="ascending">Highest to lowest playcount</option>
        <option value="descending">Lowest to highest playcount</option>
    </select>
    )    

}

export const StyledSorter = styled(Sorter)`
`