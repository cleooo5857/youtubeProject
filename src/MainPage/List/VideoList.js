import React, { useState,useEffect } from 'react';
import styled from "styled-components";
import VideoCard from "../../Components/Card/VideoCard";
import { flexCenter } from "../../styles/common";
import {useMutation,useQuery,useQueryClient} from "@tanstack/react-query"
import queryKey from "../../conts/queryKey";
import VideoApi from "../../apis/videoApi";
import { useInView } from 'react-intersection-observer'
import usePopularVideoQuery from '../../queries/usePopularMovieQuery';

function VideoList() {
   
   // const {data : videoList} = useQuery([queryKey.POPLUAR_VIDEO_LIST] , () => VideoApi.getPopluarVideo());
   const { data: videoList, fetchNextPage, isFetching } = usePopularVideoQuery();
   const [ref,inView] = useInView();
   // const [nextToken,setnextToken] = useState(videoList && videoList.data.nextPageToken);

   // useEffect(() => { 
   //    const res = async() =>{
   //       try{
   //          const response = await VideoApi.getPopluaraddVideo(nextToken)
   //          setnextToken(response.data.nextPageToken)
   //          videoList.data.items.concat(response.data.items)
   //       }catch{
   //       }
   //     }
   //     res()
   //    },[inView])
   useEffect(() => {
      // 서버 요청시 취소됐을때
        if (!inView || isFetching) return;
        if(videoList){
         const token = videoList.pages.map((list) => list.data)
         console.log(fetchNextPage(token));  
        
         }
    }, [inView]);

   
   // 맨처음 받아온 리스트의 nextpagetoken값을 state값의 저장
   // inview true 일때 nextpagetoken값 저장해서 보냄
      
   
   return (
      <S.Wrapper>
         {videoList &&
            videoList.pages.map((item,index) => (
               <React.Fragment key={index}>
                  {item.data.items.map((list) => (
                     <VideoCard list={list} />
                  ))}
               </React.Fragment>
            ))
         }
         <div ref={ref}></div>
      </S.Wrapper>
   )
}

export default VideoList

const Wrapper = styled.div`
   display: flex;
   flex-flow: row wrap;
`

const S = {
   Wrapper,
}