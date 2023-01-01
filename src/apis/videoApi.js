import Axios from "./@core"
const PATH = '/videos?'
const URL = 'part=snippet&chart=mostPopular&maxResults=16&regionCode=KR'

const VideoApi = {
   getPopluarVideo({params,token}) {
      
      return Axios.get(PATH + URL, {params})
   },

   // getPopluaraddVideo(Token) {
   //    return Axios.get(PATH , { params : {
   //       part: 'snippet',
   //       chart : 'mostPopular',
   //       maxResults: 8,
   //       regionCode : 'KR',
   //       nextPageToken:Token !== Token,
   //    }})
   // }
}

export default VideoApi