import { PUBLIC_API_URL } from '$env/static/public';
import type { IUser } from '$lib/ts';
import { fail, redirect } from '@sveltejs/kit';

export const prerender = false;

export const actions = {
	register: async ({ request }) => {
		const data = await request.formData();

		console.log(data);

		return { success: true };
	},
	login: async ({ request, fetch,  }) => {
		const data = await request.formData();

		const email = data.get('loginEmail');
		const password = data.get('loginPassword');
		const rememberMe = data.get('loginRememberMe');

		if (!email) return fail(400, { field: 'email', message: 'E-mail is required', missing: true });
		if (!password)
			return fail(400, { field: 'password', message: 'Password is required', missing: true });

		const incorrect = false;

		if (incorrect)
			return fail(400, { field: 'email', message: 'E-mail is incorrect', error: true });

		const authenticated = await fetch(PUBLIC_API_URL + '/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		});

		if (!authenticated.ok)
			return fail(authenticated.status, { field: null, message: 'Cannot login', error: true });

		const user: IUser = await authenticated.json();
        
		throw redirect(303, '/');
	}
};
