'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SignUpForm } from '@/components/auth/sign-up-form';

export function SignUpCard() {
  const t = useTranslations('auth');

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{t('signUp')}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {t('hasAccount')}{' '}
          <Link
            href="/sign-in"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {t('signIn')}
          </Link>
        </p>
      </div>
      <SignUpForm />
    </div>
  );
}
