var playlist = {
  Queen: 'Killer Queen'
}

function updatePlaylist(playlist, artist, song){
 playlist[artist] = song;
 return playlist;
}
function removeFromPlaylist(playlist, artistName){
  var deletedobject = artistName;
  console.log(playlist.deletedobject);
  delete playlist.deletedobject;
  
}