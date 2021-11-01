import React from "react"
import styled from "styled-components"

const AlbumCard = ({className, id, imageLink, name, artist, playcount}) => {
  return (
    <div className={className} key={id}>
        <div className="img__wrapper">
            <img src={imageLink}/>
        </div>
        <div className="title__wrapper">
            <h2 className="main-title">{name}</h2>
            <h4 className="sub-title">{artist}</h4>
        </div>

        <div className="meta__wrapper">
            <h6>This album was streamed: {playcount} times</h6>
        </div>
    </div>
  )
}

export const StyledAlbumCard = styled(AlbumCard)`
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 1.5em;
    
    .title__wrapper {
        padding: 0 1em;
        padding-top: 1em;

        h2, h4 {
            margin: unset;
        }

        .main-title {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        .sub-title {
            font-weight: 100;
        }
    }

    .img__wrapper {

        height: 75%;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
        }
        
    }

    .meta__wrapper {
        padding: 1em;
        h6 {
            margin: unset;
            font-weight: 400;
        }
    }

`

