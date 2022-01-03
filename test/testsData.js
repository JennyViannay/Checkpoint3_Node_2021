const albumKeys = ['id', 'title', 'genre', 'picture', 'artist'];
const trackKeys = ['id', 'title', 'youtube_url', 'id_album'];

const albumToCreate = {
  title: 'Flipp',
  genre: 'rap',
  picture:
    'https://static.fnac-static.com/multimedia/Images/FR/NR/f3/98/8e/9345267/1507-1/tsp20180125134658/Flip.jpg',
  artist: 'Lomepal',
};

const trackToCreate = {
  title: 'Civilisation',
  youtube_url: 'https://www.youtube.com/watch?v=7CT7WZCIsMk',
  id_album: 1
};

module.exports = {
  albumKeys,
  trackKeys,
  albumToCreate,
  trackToCreate,
};
