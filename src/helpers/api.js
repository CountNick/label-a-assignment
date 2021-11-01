// get all albums by Iron Maiden
export const getAllAlbums = async () => {
    const res = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=ironmaiden&api_key=d732731be2f5f0ec4b10e5a3607d7090&format=json`
              )
    // set the response to json
    const albums = res.json()
    // return the json data
    return albums
}
// get album information based using the mbid
export const getAlbumInfo = async (query) => {
    // encode the uri component
    const encodedQuery = encodeURIComponent(query)
    // fetch the data
    const res = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=d732731be2f5f0ec4b10e5a3607d7090&mbid=${encodedQuery}&format=json`
              )
    // set the response to json
    const albumInfo = res.json()
    // return the json data
    return albumInfo
}