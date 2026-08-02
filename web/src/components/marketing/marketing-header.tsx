import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { LocaleSwitcher } from './locale-switcher';

export function MarketingHeader() {
  const t = useTranslations('auth');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href={siteConfig.url} className="flex items-center gap-2">
          <Image
            src="/logo_ultravis.png"
            alt="Ultravis"
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 rounded-full object-cover"
            priority
          />
          <span className="text-xl font-bold tracking-tight">Ultravis</span>
        </a>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link href="/sign-in">
            <Button variant="ghost" size="sm">
              {t('signIn')}
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="sm">{t('createAccount')}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
