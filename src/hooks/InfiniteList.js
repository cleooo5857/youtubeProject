import {  useState } from "react"

const useInfiniteList = (initialValues) => {
   const [Token,setToken] = useState(initialValues);
   const [VideoaddList,setVideoaddList] = useState();
   // 1. 호출한 토큰값을 보낸다
   // 2. 토큰값으로 상태를 관리함
   // 3. 받은 토큰값으로 api 요청 
   // 4. 요청한 추가 리스트 반환
   const addList = (res) => {
      console.log(res);
   }
   return [Token , addList , setToken , VideoaddList]
}

export default useInfiniteList