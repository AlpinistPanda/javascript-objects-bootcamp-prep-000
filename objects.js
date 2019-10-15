var playlist = {
  "John Lennon" : "Let it be"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
}