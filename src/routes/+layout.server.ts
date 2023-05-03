export const ssr = true;
export const prerender = true;

export const load = async ({ locals }) => {
    return {
        session: locals.session
    };
};