import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getAlbumInfo } from "../helpers/api";
import { StyledLoader } from "./Loader";
import styled from "styled-components";


const AlbumDetail = ({className}) => {
    // get the id of the clicked router link
    let { id } = useParams();
    // init state for loader and album data
    const [albumInfo, setInfoData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(async() => {
        // get information data
        const information = await getAlbumInfo(id);
        // set information data
        setInfoData(information.album);
        // set the loading state to false
        setIsLoading(false);
    }, []);

    // if loading is true render loader, otherwise render component
    return (
        <React.Fragment>
          {isLoading ? (
            <StyledLoader />
          ) : (
            <div className={className}>
            <h1 className="album__title">{albumInfo.name}</h1>
            <h2 className="album__artist">by {albumInfo.artist}</h2>

            <img src={albumInfo.image[4]["#text"]}/>
            
            <p className="album__wiki">
                {albumInfo.wiki.summary}
            </p>
            
            <h3>Track list</h3>
            <ul className="album__track-list">
            {albumInfo.tracks.track.map((track) => (
                <li key={track.name} className="track__container">
                    <div className="track__name">
                        {track.name} 
                    </div>
                    <div className="track__duration">
                        {Math.floor(track.duration / 60)}:{track.duration - Math.floor(track.duration / 60) * 60}
                    </div>
                </li>
            ))}
            </ul>
        </div>
          )}
        </React.Fragment>
      );
    
}

export const StyledAlbumDetail = styled(AlbumDetail)`
    
    position: fixed;
    top: 0;
    background: #fff;
    height: 100%;
    padding: 1em 2em;
    overflow-y: scroll;

    .album__artist {
        font-weight: 200;
    }

    .album__wiki {
        font-weight: 300;
        word-break: break-word;
    }

    .album__track-list {
        
        padding: unset;
        
        .track__container {
            
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            list-style-type: none;
            padding: 0;

            .track__name {
                font-weight: 700;
            }

            .track__duration {
                font-weight: 100;
            }

        }
    }

    @media only screen and (min-width: 750px) { 

        .album__wiki, .album__track-list {
            max-width: 50%;
        }
        
    }
`