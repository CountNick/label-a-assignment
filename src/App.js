import React, { useState, useEffect } from 'react';
import './App.css';
import { getAllAlbums } from './helpers/api';
import Wrapper  from './components/Wrapper';
import  { StyledAlbumCard }  from './components/AlbumCard';
import  { StyledAlbumDetail }  from './components/AlbumDetail';
import { StyledLoader } from './components/Loader';
import { StyledSorter} from './components/Sorter';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [albums, setAlbumData] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  
  useEffect(async() => {
    
    
    const allAlbums = await getAllAlbums();
    // set data but only with if ID is not undefined
    setAlbumData(allAlbums.topalbums.album.filter(album => {
      if(typeof album.mbid !== 'undefined'){
        return album
      }
    }));

    setMetaData(allAlbums.topalbums['@attr']);
    setIsLoading(false);
       
  }, []);
  
  

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="App">
        <StyledLoader />
        </div>
      ) : (
        <div className="App">
        <header className="App-header">
        <h1>{metaData.artist} Wiki</h1>

        sort by <StyledSorter array={albums} setData={setAlbumData}/>
        </header>
        
        <Router>
        <Wrapper>
        {albums.map(({artist, image, mbid, name, playcount, url}) => (
  
          <Link key={mbid} to={`/album/${mbid}`}>
          <StyledAlbumCard
            imageLink= {image[3]['#text']}
            id= {mbid}
            name= {name}
            artist= {artist.name}
            playcount= {playcount}
          />
          </Link>
        ))}
        </Wrapper>
            
            
        <Route path="/album/:id" component={() => <StyledAlbumDetail />} />
        
  
        </Router>
  
        
      </div>
      )}
    </React.Fragment>
  );
  
}

export default App;
