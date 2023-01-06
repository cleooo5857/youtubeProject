import { useState } from "react";
import styled from "styled-components"
import {useNavigate} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';


function SearchFrom() {

   // 사용자가 입력한 input 값을 useState 담음 
   // useState의 담은 값을 query형식으로 보낸다
   // 데이터를 받아왔어 ? 받아왔으면 useNavigate url(q=input)  
   // 받아온 데이터를 SearchPage컴포넌트 props로 전달
   // 데이터 뿌려줌 
   // 스크롤 시 검색 결과 데이터  최대 n개 불러오기

   const [input , setInput ] = useState('');
   const naviate = useNavigate();

   const onSearchChange = (e) => {
      setInput(e.target.value);
   }
   
   const onSearchSubmit = (e) => {
      e.preventDefault();
         const data = {
            part:'snippet',
            maxResults: 9,
            q:input,
         }
         if(input.length < 1) return
         
         naviate(`/search/${data.q}`)
   }


   return (
      <S.Wrapper>
         <form onSubmit={onSearchSubmit}>
            <input value={input} onChange={onSearchChange} type="text" placeholder="검색어를 입력해 주세요"/>
            <button><BsSearch/></button>
         </form>
      </S.Wrapper>
   )
}

export default SearchFrom
   
   
   
const Wrapper = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;


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

