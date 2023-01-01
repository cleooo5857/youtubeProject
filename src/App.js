import {ThemeProvider} from 'styled-components'
import Axios from './apis/@core';
import MainPage from './MainPage';
import {theme} from './styles/theme'
import GlobalStyles from './styles/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {

  
  // Axios.get('/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR')
  // .then((res) => {
  //   console.log(res);
  // }).catch((err) => {
  //   console.log(err);
  // })
  
  const qureyClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60 * 24,
            cacheTime: 1000 * 60 * 5,
        },
      },
  });

  return (
    <QueryClientProvider client={qureyClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <MainPage/>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
