import { useInfiniteQuery } from '@tanstack/react-query';
import VideoApi from '../apis/videoApi';
import qureyKey from '../conts/queryKey';

const usePopularVideoQuery = () => {
    const { data, fetchNextPage, isFetching } = useInfiniteQuery(
        [qureyKey.POPLUAR_VIDEO_LIST], // 쿼리키
        //
        ({ pageParam = 1 }) => VideoApi.getPopluarVideo({ params: { page: pageParam }}), // 콜백함수
        {
            // 다음 요청 시 페이지 + 1
            getNextPageParam: (lastPage) => {
                return lastPage.data.page + 1;
            },
            onError: (err) => {
                console.error(err);
            },
        }
    );
    return { data, fetchNextPage, isFetching };
};
export default usePopularVideoQuery;
