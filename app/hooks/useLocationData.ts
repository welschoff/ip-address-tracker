import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchLocationData } from '../services/ipify';

export function useLocationData() {
  const queryClient = useQueryClient();

  const { data: searchTerm = '8.8.8.8' } = useQuery<string>({
    queryKey: ['searchValue'],
    initialData: () => queryClient.getQueryData(['searchValue']) ?? '8.8.8.8',
  });

  return useQuery({
    queryKey: ['ipData', searchTerm], // ipAddress im Key sorgt für autom. Reload bei neuer IP!
    queryFn: () => fetchLocationData(searchTerm),
  });
}
