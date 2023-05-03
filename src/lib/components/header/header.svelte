<script lang="ts">
	import { page } from "$app/stores";
	import type { IUser } from "$lib/ts";

	$: session = $page.data.session as IUser;
</script>

<header>
	<div class="wrapper">
		<a href="/">
			<h1 class="logo">Ecommerce</h1>
		</a>

		<nav>
			<ul>
				<li>
					{#if session}
					<form action="/auth/logout" method="post">
						<button>{session.name}</button>
					</form>
					{:else}
						<a href="/auth"> Login </a>
					{/if}
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="scss">
	header {
		@apply flex items-center p-4 bg-base-300;

		& .wrapper {
			@apply flex items-center justify-between w-full max-w-6xl mx-auto;

			& .logo {
				@apply text-lg font-semibold text-white;
			}

			& > nav {
				& > ul {
					@apply flex items-center space-x-4;

					& > li {
						@apply btn btn-ghost link-hover;
					}
				}
			}
		}
	}
</style>
