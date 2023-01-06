import Axios from "./@core"
const PATH = '/videos?'
const Search = '/search?'
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
   },

   getSearchMovieList(params) {
      return Axios.get(Search , {params})
   }
}

export default VideoApi