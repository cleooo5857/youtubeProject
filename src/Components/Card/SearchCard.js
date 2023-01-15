import styled from "styled-components"

function SearchCard({list}) {

 
   return (
      <S.Wrapper>
         <div>
            <img src={list.snippet.thumbnails.high.url}/>
         </div>
            <S.Title>
               <div>
                  <p>{list.snippet.title}</p>
               </div>
            </S.Title>

      </S.Wrapper>
   )
}

export default SearchCard

const Wrapper = styled.div`
   width: 100%;
   margin-bottom: 10px;
   display: flex;

   & div {
      display: flex;
      flex-wrap : wrap;
      width: 20%;
   }

   & div img {
   margin-left: auto;
   margin-right: auto;
   overflow: hidden;
   display: block;
   margin: 5px;
   width: 100%;
   border-radius: 25px;
   }
`
const Title = styled.div`
   margin-top: 10px;
   
   & div{
      width: 70%;
   }
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