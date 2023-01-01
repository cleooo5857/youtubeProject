import React, { useState,useEffect } from 'react';
import styled from "styled-components";
import VideoCard from "../../Components/Card/VideoCard";
import { flexCenter } from "../../styles/common";
import {useMutation,useQuery,useQueryClient} from "@tanstack/react-query"
import queryKey from "../../conts/queryKey";
import VideoApi from "../../apis/videoApi";
import { useInView } from 'react-intersection-observer'

function VideoList() {
   
   const {data : videoList} = useQuery([queryKey.POPLUAR_VIDEO_LIST] , () => VideoApi.getPopluarVideo());
   const [ref,inView] = useInView();
   // const {data : addList} = useQuery([queryKey.POPLUAR_VIDEO_LIST] , () => VideoApi.getPopluaraddVideo(videoList.data.nextPageToken));
   useEffect(() => {
      
      if(inView && videoList){
         // console.log(inView);
         const add = VideoApi.getPopluaraddVideo(videoList.data.nextPageToken)
         console.log(add.PromiseResult);
         
      }
   },[inView])
   
   return (
      <S.Wrapper>
         {videoList &&
            videoList.data.items.map((list) => 
               <VideoCard list={list}/>
            )
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