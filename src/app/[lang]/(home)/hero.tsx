interface Props {
    dictionary: any;
}

export default async function HeroSection({ dictionary }: Props) {
    return (
        <div className="w-full bg-slate-400">
            <h1 className="text-5xl">{dictionary.introduction}</h1>
        </div>
    )
}