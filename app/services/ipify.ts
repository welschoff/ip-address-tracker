export async function fetchLocationData(ipAddress: string) {
  const apiKey = import.meta.env.VITE_API_KEY;

  const response = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipAddress}`,
  );

  if (!response.ok) {
    throw new Error('Fehler beim Abrufen der IP-Daten');
  }

  return await response.json();
}
