import type { IUser } from '$lib/ts';

export const handle = async ({ event, resolve }) => {
	const session = event.cookies.get('auth');

	if (!session) return await resolve(event);

	event.locals.session = JSON.parse(session) as IUser;

	return await resolve(event);
};
