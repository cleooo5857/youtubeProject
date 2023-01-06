import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Logo() {
   return (
      <S.Links to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </S.Links>
   )

}

export default Logo;

const Links = styled(Link)`
   display: flex;
   color: inherit;
   text-decoration: inherit;
   font-size: 1.5rem;
   /* line-height: 2rem; */
    
   & svg{
      opacity: 1;
      color: rgb(255 0 0 );
   }

   & h1 {
      margin-left: 10px;

   }
`

const S = {
   Links
}