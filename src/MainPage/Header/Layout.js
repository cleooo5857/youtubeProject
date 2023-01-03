import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common";
import SearchFrom from "./search/SearchForm";

function HeaderLayout() {
   return (
      <S.Wrapper>
         <Container>
            <SearchFrom/>
         </Container>
      </S.Wrapper>
   )
}
export default HeaderLayout

const Wrapper = styled.div`
   margin: 20px 0;
   `
const Container = styled.div`
   padding: 0 20px;
   ${flexCenter}
   /* justify-content: space-between; */
`

const S = {
   Wrapper,
   Container
}