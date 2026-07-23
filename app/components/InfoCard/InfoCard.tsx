import InfoCardSection from "./InfoCardSection"
import { useQuery } from "@tanstack/react-query"

function InfoCard() {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['locationData'],
        queryFn: async () => {
            const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=8.8.8.8`)
            const result = await response.json()

            return result;
        },
    })

    if (isLoading) return <div>Lade Daten...</div>
    if (isError || !data) return <div>Fehler beim Laden!</div>

    return (
        <div className="h-35 shadow-sm flex items-center bg-white w-fit rounded-xl justify-evenly">
            <InfoCardSection title="IP ADDRESS" data={data.ip} />
            <hr className="w-0.5 bg-gray-200 h-15 border-0" />
            <InfoCardSection title="LOCATION" data={data.location.region} />
            <hr className="w-0.5 bg-gray-200 h-15 border-0" />
            <InfoCardSection title="TIMEZONE" data={`UTC ${data.location.timezone}`} />
            <hr className="w-0.5 bg-gray-200 h-15 border-0" />
            <InfoCardSection title="ISP" data={data.isp} />
        </div>
    )
}

export default InfoCard