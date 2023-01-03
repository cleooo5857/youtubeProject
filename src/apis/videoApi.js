import Axios from "./@core"
const PATH = '/videos?'
const URL = 'part=snippet&chart=mostPopular&maxResults=16&regionCode=KR'

const VideoApi = {
   getPopluarVideo() {
      return Axios.get(PATH + URL )
   },

   getPopluaraddVideo(params) {
      console.log(params);
      return Axios.get(PATH  ,{params : {
         part: 'snippet',
         maxResults: 9,
         type: 'video',
         chart : 'mostPopular' ,
         pageToken: params && params,
      }})
   }
}

export default VideoApi