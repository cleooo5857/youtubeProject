import {  useState } from "react"
import VideoApi from "../apis/videoApi";

const useInfiniteList = (initialValues) => {
   const [Token,setToken] = useState(initialValues);
   const [items,setitems] = useState();
   // 1. 호출한 토큰값을 보낸다
   // 2. 토큰값으로 상태를 관리함
   // 3. 받은 토큰값으로 api 요청 
   // 4. 요청한 추가 리스트 반환
   console.log(Token);
   const addList = async (API,params) => {
      try{
         const res = await API({...params,pageToken:Token})
         setitems(res.data.items)
         setToken(res.data.nextPageToken)
      }catch(err){
         console.log(err);
      }
   }
   console.log(items);
   return [Token ,addList, items ]
}

export default useInfiniteList