import { useEffect, useState } from "react"
import styled from "styled-components"

function VideoCard({list}) {

   const [videoOverview, setvideoOverview] = useState(list.snippet.title)


   useEffect(() => {
      if(list.snippet.title.length > 50){
         setvideoOverview(list.snippet.title.slice(0,50) + '...')
      }else{
         setvideoOverview(videoOverview)
      }
   },[])
 
   return (
      <S.Wrapper>
         <div>
            <img src={list.snippet.thumbnails.standard.url}/>
         </div>
         <S.Title>
            <div>
               <p>{videoOverview}</p>
               <p>{list.snippet.channelTitle}</p>
            </div>
         </S.Title>
      </S.Wrapper>
   )
}

export default VideoCard

const Wrapper = styled.div`
   width: 25%;
   margin-bottom: 10px;

   & div {
      display: flex;
      flex-wrap : wrap;
      width: 100%;

   }

   & div img {
   margin-left: auto;
   margin-right: auto;
   overflow: hidden;
   display: block;
   border-radius: 25px;
   margin-right: 5px;

   }
   
`
const Title = styled.div`
   margin-top: 10px;
   

   & p {
      font-size: ${({theme}) => theme.fontSize.medium};
      font-weight: ${({theme}) => theme.fontWeight.bold};
      color: ${({theme}) => theme.palette.subColor};
      display: block;
      margin-bottom: 5px;
      width: 100%;
      padding : 0 10px
   }

   & p + p {
      font-size: ${({theme}) => theme.fontSize.small};
      font-weight: ${({theme}) => theme.fontWeight.medium};
   }
`

const S = {
   Wrapper,
   Title,
}