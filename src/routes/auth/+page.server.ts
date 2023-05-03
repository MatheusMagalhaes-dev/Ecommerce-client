import { PUBLIC_API_URL } from '$env/static/public';
import { fail, redirect } from '@sveltejs/kit';
import type { IUser } from '$lib/ts';

export const prerender = false;

export const actions = {
	register: async ({ request, fetch }) => {
		const data = await request.formData();

		const name = data.get('registerName');
		const email = data.get('registerEmail');
		const password = data.get('registerPassword');
		const confirmPassword = data.get('registerConfirmPassword');

		if (!name) return fail(400, { field: 'name', message: 'Name is required', missing: true });
		if (!email) return fail(400, { field: 'email', message: 'E-mail is required', missing: true });
		if (!password)
			return fail(400, { field: 'password', message: 'Password is required', missing: true });
		if (!confirmPassword)
			return fail(400, {
				field: 'confirmPassword',
				message: 'Confirm password is required',
				missing: true
			});

		if (password !== confirmPassword)
			return fail(400, {
				field: 'confirmPassword',
				message: 'Passwords do not match',
				error: true
			});

		const registered = await fetch(PUBLIC_API_URL + '/auth/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, email, password })
		});

		if (!registered.ok)
			return fail(registered.status, { field: null, message: 'Cannot sign up!', error: true });

		return { message: 'User registered with success!', success: true };
	},
	login: async ({ request, fetch, cookies }) => {
		const data = await request.formData();

		const email = data.get('loginEmail');
		const password = data.get('loginPassword');
		const rememberMe = data.get('loginRememberMe');

		if (!email) return fail(400, { field: 'email', message: 'E-mail is required', missing: true });
		if (!password)
			return fail(400, { field: 'password', message: 'Password is required', missing: true });

		const authenticated = await fetch(PUBLIC_API_URL + '/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		});

		if (!authenticated.ok)
			return fail(authenticated.status, { field: null, message: 'Cannot login!', error: true });

		const user: IUser = await authenticated.json();

		cookies.set('auth', JSON.stringify(user), {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			maxAge: rememberMe ? 60 * 60 : undefined
		});

		throw redirect(302, '/');
	}
};