type InfoCardSectionProps = {
    title: string;
    data: string;
}

function InfoCardSection({ title, data }: InfoCardSectionProps) {
    return (
        <section className="px-5 flex flex-col gap-2 min-w-40">
            <span className="text-xs text-gray-400 tracking-wide font-semibold">{title}</span>
            <span className="flex text-xl font-bold">{data}</span>
        </section>
    )
}

export default InfoCardSection