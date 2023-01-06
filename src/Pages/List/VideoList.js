import React, { useState,useEffect } from 'react';
import styled from "styled-components";
import VideoCard from "../../Components/Card/VideoCard";
import { flexCenter } from "../../styles/common";
import {useMutation,useQuery,useQueryClient} from "@tanstack/react-query"
import queryKey from "../../conts/queryKey";
import VideoApi from "../../apis/videoApi";
import { useInView } from 'react-intersection-observer'
import SearchFrom from '../Header/search/SearchForm/SearchForm';

function VideoList() {
   
   const [ref,inView] = useInView();
   const [AddvideoList, setAddVideoList] = useState();
   const [pageToken,setPageToKen] = useState();
   // 맨처음 받아온 리스트의 nextpagetoken값을 state값의 저장
   // inview true 일때 nextpagetoken값 저장해서 보냄
   // useEffect(() => { 
   //    const res = async() =>{
      //       try{
   //           setList(videoList)
   //       }catch{

   //       }
   //     }
   //     res()
   //    },[videoList])

   const {data : videoList} = useQuery([queryKey.POPLUAR_VIDEO_LIST] , () => VideoApi.getPopluarVideo(), {
      onSuccess: (res) => {
         setAddVideoList(res)
      }
   });
   
   useEffect(() => {
      const res = async() =>{
         try{
            if(inView){
               const respone = await VideoApi.getPopluaraddVideo(pageToken);
               setPageToKen(respone.data.nextPageToken)
               setAddVideoList({
                     ...AddvideoList,
                     data:{
                           ...AddvideoList.data,
                           items:AddvideoList.data.items.concat(respone.data.items)
                     
                        }
                     })
                  }
         }catch(err){
            console.log(err);
         }
      }
      res()
   },[inView])


   console.log(AddvideoList && AddvideoList.data.items);


   // return {
   //    …person,
   //    mentors: person.mentors.map((mentor) => {
   //        return { …mentor, name: current };
   //      return mentor;
   //    }),
   //  };

   // const mutation = useMutation({
   //    onSuccess: () => {
   //      // Invalidate and refetch
   //    },
   //  })
   
   return (
      <S.Wrapper>
         {AddvideoList &&
            AddvideoList.data.items.map((list) => 
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