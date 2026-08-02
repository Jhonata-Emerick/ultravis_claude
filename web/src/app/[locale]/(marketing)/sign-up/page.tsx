import { redirect } from 'next/navigation';
import { SignUpCard } from '@/components/auth/sign-up-card';
import { createClient } from '@/lib/supabase/server';

export default async function SignUpPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/dashboard');
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SignUpCard />
      </div>
    </div>
  );
}
