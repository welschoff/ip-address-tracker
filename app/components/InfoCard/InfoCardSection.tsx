type InfoCardSectionProps = {
    title: string;
    data: string;
}

function InfoCardSection({ title, data }: InfoCardSectionProps) {
    return (
        <section className="flex flex-col gap-2 p-5">
            <span>{title}</span>
            <span className="text-2xl font-semibold">{data}</span>
        </section>
    )
}

export default InfoCardSection