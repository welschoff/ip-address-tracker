import { useQuery } from '@tanstack/react-query';
import { fetchLocationData } from '../services/ipify';

export function useLocationData(ipAddress: string) {
  return useQuery({
    queryKey: ['locationData', ipAddress], // ipAddress im Key sorgt für autom. Reload bei neuer IP!
    queryFn: () => fetchLocationData(ipAddress),
    enabled: Boolean(ipAddress), // Läuft erst, wenn eine IP vorhanden ist
  });
}
