import { useQuery } from '@tanstack/react-query'
import {  getNewsById } from '@/fe/services/news.service'
import { useRouter } from 'next/router'

export function useNewsByIdHooks () {
    const router = useRouter()
    const { id } = router.query

  const { data: newsById, isLoading: newsByIdLoading, error: newsByIdError } = useQuery({
    queryKey: ['newsById', id],
    queryFn: () => getNewsById(id as string),
    enabled: !!id
  })

  console.log("asdasd", newsById)

  return {  newsById, newsByIdLoading, newsByIdError }
}
