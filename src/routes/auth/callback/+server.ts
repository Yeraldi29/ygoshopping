import { redirect } from '@sveltejs/kit';

export const GET = async (event) => {
  const {
    url,
    locals: { supabase }
  } = event;

  const code = url.searchParams.get('code') as string;
  const next = url.searchParams.get("next") ?? "/private";

  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      redirect(303, `/${next.slice(1)}`);
    }
  }

   redirect(303, `${url.origin}/auth/login`);
};
