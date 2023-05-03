<script lang="ts">
	export let form;
</script>

{#if form?.success || form?.error}
	<div class="alert" class:success={form?.success} class:error={form?.error}>
		<div>
			<p>{form.message}</p>
		</div>
	</div>
{/if}

<section>
	<form id="register" method="POST" action="?/register">
		<div class="card-body">
			<div class="form-control w-full max-w-xs">
				<label class="label" for="registerName">
					<span class="label-text">Name</span>
				</label>
				<input
					id="registerName"
					name="registerName"
					type="text"
					placeholder="Digit your name"
					class="input"
				/>
				{#if form?.field === 'name'}
					<label class="label" for="registerName">
						{#if form.missing}
							<span class="label-text-alt text-warning">{form.message}</span>
						{/if}
					</label>
				{/if}
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label" for="registerEmail">
					<span class="label-text">E-mail</span>
				</label>
				<input
					id="registerEmail"
					name="registerEmail"
					type="email"
					placeholder="Digit your e-mail"
					class="input"
				/>
				{#if form?.field === 'email'}
					<label class="label" for="registerEmail">
						{#if form.missing}
							<span class="label-text-alt text-warning">{form.message}</span>
						{/if}
					</label>
				{/if}
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label" for="registerPassword">
					<span class="label-text">Password</span>
				</label>
				<input
					id="registerPassword"
					name="registerPassword"
					type="password"
					placeholder="Digit your password"
					class="input"
				/>
				{#if form?.field === 'password'}
					<label class="label" for="registerPassword">
						{#if form.missing}
							<span class="label-text-alt text-warning">{form.message}</span>
						{/if}
					</label>
				{/if}
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label" for="registerConfirmPassword">
					<span class="label-text">Confirm Password</span>
				</label>
				<input
					id="registerConfirmPassword"
					name="registerConfirmPassword"
					type="password"
					placeholder="Digit your password again"
					class="input"
				/>
				{#if form?.field === 'confirmPassword'}
					<label class="label" for="registerConfirmPassword">
						{#if form.missing}
							<span class="label-text-alt text-warning">{form.message}</span>
						{/if}
					</label>
				{/if}
			</div>

			<footer class="card-actions">
				<button type="submit">Register</button>
			</footer>
		</div>
	</form>

	<form id="login" method="POST" action="?/login">
		<div class="card-body">
			<div class="form-control w-full max-w-xs">
				<label class="label" for="loginEmail">
					<span class="label-text">E-mail</span>
				</label>
				<input
					id="loginEmail"
					name="loginEmail"
					type="email"
					placeholder="Digit your e-mail"
					class="input"
				/>
				{#if form?.field === 'email'}
					<label class="label" for="loginEmail">
						{#if form.missing}
							<span class="label-text-alt text-warning">{form.message}</span>
						{/if}
					</label>
				{/if}
			</div>

			<div class="form-control w-full max-w-xs">
				<label class="label" for="loginPassword">
					<span class="label-text">Password</span>
				</label>
				<input
					id="loginPassword"
					name="loginPassword"
					type="password"
					placeholder="Digit your password"
					class="input"
				/>
				{#if form?.field === 'password'}
					<label class="label" for="loginPassword">
						{#if form.missing}
							<span class="label-text-alt text-warning">{form.message}</span>
						{/if}
					</label>
				{/if}
			</div>

			<div class="form-control">
				<label class="label" for="loginRememberMe">
					<input id="loginRememberMe" name="loginRememberMe" class="checkbox" type="checkbox" />
					<span class="label-text">Remember me</span>
				</label>
			</div>

			<footer class="card-actions">
				<button type="submit">Login</button>
			</footer>
		</div>
	</form>
</section>

<style lang="scss">
	div.alert {
		@apply mb-8;

		&.success {
			@apply alert-success;
		}
		&.error {
			@apply alert-error;
		}
	}

	section {
		@apply grid auto-cols-fr grid-flow-col gap-4;

		& > form {
			@apply card card-bordered bg-base-200;

			& > .card-body {
				& > .form-control {
					@apply max-w-full;

					& > label.label {
						@apply gap-2 justify-start cursor-pointer;
					}

					& > input.input {
						@apply input-bordered w-full;
					}
				}

				& > footer.card-actions {
					@apply justify-center mt-8;

					& > button[type='submit'] {
						@apply btn btn-wide btn-primary;
					}
				}
			}
		}
	}
</style>
