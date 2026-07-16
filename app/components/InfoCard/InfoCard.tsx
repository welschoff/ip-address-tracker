import InfoCardSection from "./InfoCardSection"

function InfoCard() {
    return (
        <div className="h-35 shadow-sm flex gap-10 items-center px-5 bg-white w-fit rounded-xl justify-evenly">
            <InfoCardSection title="IP ADDRESS" data="192.212.493.101" />
            <hr className="w-0.5 bg-gray-200 h-15 border-0" />
            <InfoCardSection title="LOCATION" data="Brooklyn" />
            <hr className="w-0.5 bg-gray-200 h-15 border-0" />
            <InfoCardSection title="TIMEZONE" data="UTC - 05:00" />
            <hr className="w-0.5 bg-gray-200 h-15 border-0" />
            <InfoCardSection title="ISP" data="SpaceX" />
        </div>
    )
}

export default InfoCard