import { useQuery } from '@tanstack/react-query'
import { getNews } from '@/fe/services/news.service'
import { useState } from 'react';

export function useNewsHooks () {
  
  const [pageSize, setPageSize] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const {
    data: news,
    isLoading: newsLoading,
    error: newsError,
  } = useQuery({
    queryKey: ["listNews", pageSize, currentPage, searchKeyword],
    queryFn: async () => {
      const response = await getNews({
        page: currentPage,
        limit: pageSize,
        keyword: searchKeyword,
      });
      return {
        items: response.news,
        totalPages: response.pagination.totalPages,
        page: Number(response.pagination.currentPage),
        limit: Number(response.pagination.limit),
      };
    },
    refetchOnWindowFocus: false,
    gcTime: 0,
  });


  return { news, newsLoading, newsError, pageSize, currentPage, setCurrentPage, setSearchKeyword, setPageSize }
}
