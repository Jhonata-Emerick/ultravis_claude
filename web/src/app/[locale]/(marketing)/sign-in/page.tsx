import { redirect } from 'next/navigation';
import { SignInCard, VerificationBanner } from '@/components/auth/sign-in-card';
import { createClient } from '@/lib/supabase/server';

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ verified?: string }>;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/dashboard');
  }

  const params = await searchParams;
  const showVerificationBanner = params.verified === 'pending';

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        {showVerificationBanner && <VerificationBanner />}
        <SignInCard />
      </div>
    </div>
  );
}
