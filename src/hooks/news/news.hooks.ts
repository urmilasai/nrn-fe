import { useQuery } from '@tanstack/react-query'
import { getNews, getNewsById } from '@/fe/services/news.service'
import { useRouter } from 'next/router'

export function useNewsHooks () {
    const router = useRouter()
    const { id } = router.query
    console.log("id", id)

  const { data: news, isLoading: newsLoading, error: newsError } = useQuery({
    queryKey: ['newsList'],
    queryFn: getNews
  })

  const { data: newsById, isLoading: newsByIdLoading, error: newsByIdError } = useQuery({
    queryKey: ['newsById', id],
    queryFn: () => getNewsById(id as string)
  })

  return { news, newsLoading, newsError, newsById, newsByIdLoading, newsByIdError }
}
