import { useQuery } from '@tanstack/react-query'
import { getAdvertisement } from '@/fe/services/advertisement.service'

export function useAdvertisementHooks () {
  

  const { data: advertisement, isLoading: advertisementLoading, error: advertisementError } = useQuery({
    queryKey: ['advertisementList'],
    queryFn: getAdvertisement
  })



  return { advertisement, advertisementLoading, advertisementError }
}
