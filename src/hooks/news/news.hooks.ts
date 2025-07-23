import { useQuery } from '@tanstack/react-query'
import { getNews } from '@/fe/services/news.service'

export function useNewsHooks () {
  

  const { data: news, isLoading: newsLoading, error: newsError } = useQuery({
    queryKey: ['newsList'],
    queryFn: getNews
  })


  return { news, newsLoading, newsError }
}
