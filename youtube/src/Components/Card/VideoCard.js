import styled from "styled-components"

function VideoCard({list}) {

 
   return (
      <S.Wrapper>
         <div>
            <img src={list.snippet.thumbnails.standard.url}/>
         </div>
         <S.Title>
            <div>
               <p>{list.snippet.title}</p>
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
   margin-right: 5px;
   }
`
const Title = styled.div`
   margin-top: 10px;
   

   & p {
      font-size: ${({theme}) => theme.palette.mainColor};
      display: block;
      margin-bottom: 5px;
      width: 100%;
   }

   & p + p {
      font-size: ${({theme}) => theme.palette.small};
   }
`

const S = {
   Wrapper,
   Title,
}