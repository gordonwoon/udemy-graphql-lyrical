import gql from 'graphql-tag';

export default gql`
 mutation AddSong($content: String, $songId: ID) {
   addLyricToSong(content: $content, songId: $songId) {
     id
     lyrics {
       id
       content
     }
   }
 }
`;