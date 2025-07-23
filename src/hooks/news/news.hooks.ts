import { useQuery } from '@tanstack/react-query'
import { getNews, getNewsById } from '@/fe/services/news.service'
import { useRouter } from 'next/router'

export function useNewsHooks () {
  

  const { data: news, isLoading: newsLoading, error: newsError } = useQuery({
    queryKey: ['newsList'],
    queryFn: getNews
  })


  return { news, newsLoading, newsError }
}
