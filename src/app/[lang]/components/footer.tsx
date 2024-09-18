interface Props {
    dictionary: any;
}

export default function Footer({ dictionary }: Props) {
    return (
        <footer className="w-full h-24 bg-zinc-800">
            <a href="mailto:vincent.zhong@epitech.eu">
                <div className="text-5xl underline text-white">
                    Mail
                </div>
            </a>
        </footer>
    );

}