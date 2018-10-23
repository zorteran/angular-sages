const fs = require('fs');
let songs = require('./data.json').songs;
let artist_id = 0;
let artists = [];
let artistsMap = {};
let id = 0;
songs.map(song => {
  if(!artistsMap[song.artist]) {
    artist_id++;
    artistsMap[song.artist] = {
      id: artist_id,
      name: song.artist
    }
    artists.push(artistsMap[song.artist]);
  }
})
songs = songs.map(v => {
  id++;
  return {
    id,
    title: v.title,
    year: v.year,
    artistId: artistsMap[v.artist].id,
    webUrl: v.web_url,
    imgUrl: v.img_url.replace('http://fireflygrove.com/songnotes/images/artists/', 'http://www.songnotes.cc/images/artists/')
  };
})

const data = {
  users: [{
    id: 1,
    name: "Sages Fan",
    password: 'admin123'
  }],
  playlists: [{
    id: 1,
    name: 'Ulubione',

  }],
  playlistSongs: [
    {id: 1, songId: 5, playlistId: 1},
    {id: 2, songId: 30, playlistId: 1}
  ],
  artists,
  songs
}
fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
