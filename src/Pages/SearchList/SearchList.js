import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components";
import VideoApi from "../../apis/videoApi"
import SearchCard from "../../Components/Card/SearchCard";
import { useInView } from 'react-intersection-observer';
import HeaderLayout from "../Header/Layout";
import useInfiniteList from "../../hooks/InfiniteList";


function SearchList(){
   const [ SearchList , setSearchList] = useState();
   const [ ref, inView] = useInView();
   const [addToken,setAddToken] = useState();
   const [ Token, AddSearchList ] = useInfiniteList(addToken);
   const location = useLocation();
   const data = location.pathname.slice(8);
   const decodeurl = decodeURI(data);

   // inview 커스텀 훅
   // 각 페이지의 끝 지점 도달
   // 인풋값으로는 해당 nextToken값이 필요
   // 아웃풋 해당 추가 items를 반환

   useEffect(() => {
      const res = async () => {
         try{
            const data = {
               part:'snippet',
               maxResults: 9,
               q:decodeurl,
            }
            const res = await VideoApi.getSearchMovieList(data)
            setSearchList(res);
            setAddToken(res.data.nextPageToken); 
         }catch (err){
            console.log(err);
         }
      }
      res()
   },[location])


   useEffect(() => {
      // 서버 요청시 취소됐을때
      if(inView){
         // api를 인자로 전달?
         AddSearchList(VideoApi.getSearchMovieList())

      }
   }, [inView]);

   
   return(
      <S.Wrapper>
         <HeaderLayout/>
         {SearchList &&
            SearchList.data.items.map((list) => 
               <SearchCard list={list}/>
            )
         }
         <div ref={ref} />
      </S.Wrapper>
   )
}

export default SearchList


const Wrapper = styled.div`
   
`

const S = {
   Wrapper,
}