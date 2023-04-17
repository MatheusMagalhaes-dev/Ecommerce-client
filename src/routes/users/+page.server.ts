import { PUBLIC_API_URL } from '$env/static/public';

export const load = async ({ params: { _id } }) => {
	const [users] = await Promise.all([
		fetch(PUBLIC_API_URL + '/users/' + _id).then((res) => res.json())
	]);

	return { users };
};
