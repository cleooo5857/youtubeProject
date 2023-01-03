import styled from "styled-components"

function SearchFrom() {
   return (
      <S.Wrapper>
         <form action="" method="post">
            <input type="text" placeholder="검색어를 입력해 주세요"/>
            <button type="submit">찾기</button>
         </form>
      </S.Wrapper>
   )
}

export default SearchFrom
   
   
   
const Wrapper = styled.div`

   & input {
      padding: 0;
      background: none;
      outline: none;
      color: #222;
      font-size: 15px;
      line-height: 40px;
      border-radius: 40px;
      padding: 0 10px;
   }

   & button {
      color: #EDEDED;
      float: right;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #949BA0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
   }
`

const S = {
   Wrapper
}

