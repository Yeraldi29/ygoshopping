import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({
  locals: { session, user },
  cookies,
  url
}) => {

  return {
    session,
    user,
    cookies: cookies.getAll(),
  };
};
