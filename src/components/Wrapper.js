import styled from "styled-components"

export default styled.section`
    margin: 1em 2em;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 900px) { 
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`
