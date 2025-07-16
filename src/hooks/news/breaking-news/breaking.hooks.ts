import { useQuery } from '@tanstack/react-query'
import { getBreakingNews } from '@/fe/services/news.service'

export function useBreakingNews () {
  const { data: breakingNews, isLoading: breakingNewsLoading, error: breakingNewsError } = useQuery({
    queryKey: ['getBreakingNews'],
    queryFn: getBreakingNews
  })

  return { breakingNews, breakingNewsLoading, breakingNewsError }
}
