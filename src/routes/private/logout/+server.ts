export const GET = async (event) => {
    const {
        locals: { supabase }
    } = event;

    const { error } = await supabase.auth.signOut();

    if (!error) {
        return new Response(
            JSON.stringify(
                { success: true, error }
            )
        );
    }

    return new Response(
        JSON.stringify(
            { success: false, error }
        )
    );
};
