import {useTranslations} from 'next-intl';

export default function HeroSection() {
    const t = useTranslations('HeroSection');

    return (
        <div className="w-full bg-slate-400">
            <h1>{t('introduction')}</h1>
        </div>
    )
}