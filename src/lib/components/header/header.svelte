<header>
	<div class="wrapper">
		<a href="/">
			<h1 class="logo">Ecommerce</h1>
		</a>

		<nav>
			<ul>
				<li>
					<a href="/auth"> Login </a>
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
