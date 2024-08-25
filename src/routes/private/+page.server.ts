import type { Actions } from './$types';

export const actions = {
    default: async ({ locals: { supabase } }) => {
        const { error } = await supabase.auth.signOut();
    },
} satisfies Actions;