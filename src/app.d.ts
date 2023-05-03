// See https://kit.svelte.dev/docs/types#app

import type { IUser } from "$lib/ts";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session?: IUser;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
