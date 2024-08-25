import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    default: async ({ locals: { supabase }, url }) => {

        let fixedUrl = url.hostname === 'localhost' ? `${url.origin}/auth/callback` : `https://${url.hostname}/auth/callback`

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: fixedUrl,
                queryParams: {
                    access_type: 'offline',
                }
            },
        });

        if (data.url) {
            redirect(307, data.url)
        }
        redirect(307, "/auth/error");
    },
} satisfies Actions;