import Axios from "./@core"
const PATH = '/videos?'


const VideoApi = {
   getPopluarVideo() {
      return Axios.get(PATH + 'part=snippet&chart=mostPopular&maxResults=25&pageToken&regionCode=KR')
   },

   getPopluaraddVideo(Token) {
      console.log(Token)
      return Axios.get(PATH , { params : {
         part: 'snippet',
         chart : 'mostPopular',
         maxResults: 9,
         regionCode : 'KR',
         pageToken:Token,
         nextPageToken : Token
      }})
   }
}

export default VideoApi