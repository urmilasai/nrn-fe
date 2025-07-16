import { useQuery } from '@tanstack/react-query'
import { getTrendingNews } from '@/fe/services/news.service'

export function useTrendingNews () {
  const { data: trendingNews, isLoading: trendingNewsLoading, error: trendingNewsError } = useQuery({
    queryKey: ['getTrendingNews'],
    queryFn: getTrendingNews
  })

 

  return { trendingNews, trendingNewsLoading, trendingNewsError }
}
