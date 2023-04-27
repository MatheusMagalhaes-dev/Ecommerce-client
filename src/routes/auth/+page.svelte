<script lang="ts">
	export let form;
</script>

{#if form?.success}
	<p>registro aprovado</p>
{/if}

<section>
	<form id="register" action="?/register" method="post">
		<div class="card-body">
			<div class="form-control w-full max-w-xs">
				<label class="label" for="registerName">
					<span class="label-text">Nome</span>
				</label>
				<input
					id="registerName"
					name="registerName"
					type="text"
					placeholder="Digite o seu nome"
					class="input"
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="registerEmail">
					<span class="label-text">Email</span>
				</label>
				<input
					id="registerEmail"
					name="registerEmail"
					type="email"
					placeholder="Digite o seu email"
					class="input"
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="registerPassword">
					<span class="label-text">Senha</span>
				</label>
				<input
					id="registerPassword"
					name="registerPassword"
					type="password"
					placeholder="Digite a sua senha"
					class="input"
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="registerConfirmPassword">
					<span class="label-text">Senha</span>
				</label>
				<input
					id="registerConfirmPassword"
					name="registerConfirmPassword"
					type="password"
					placeholder="Digite a sua senha novamente"
					class="input"
				/>
			</div>
			<footer class="card-actions">
				<button type="submit">Register</button>
			</footer>
		</div>
	</form>

	<form id="login" action="?/login" method="post">
		<div class="card-body">
			<div class="form-control w-full max-w-xs">
				<label class="label" for="loginEmail">
					<span class="label-text">Email</span>
				</label>
				<input
					id="loginEmail"
					name="loginEmail"
					type="email"
					placeholder="Digite o seu email"
					class="input"
				/>
			</div>
			{#if form?.field == 'email'}
				<label class="label" form="loginEmail">
					{#if form.missing}
						<span class="label-text-alt text-warning">{form.message}</span>
					{/if}
					{#if form.error}
						<span class="label-text-alt text-error">{form.message}</span>
					{/if}
				</label>
			{/if}
			<div class="form-control w-full max-w-xs">
				<label class="label" for="loginPassword">
					<span class="label-text">Senha</span>
				</label>
				<input
					id="loginPassword"
					name="loginPassword"
					type="password"
					placeholder="Digite a sua senha"
					class="input"
				/>
			</div>
			{#if form?.field == 'password'}
				<label class="label" form="loginPassword">
					{#if form.missing}
						<span class="label-text-alt text-warning">{form.message}</span>
					{/if}
					{#if form.error}
						<span class="label-text-alt text-error">{form.message}</span>
					{/if}
				</label>
			{/if}

			<div class="form-control">
				<label class="label" for="loginRememberMe">
					<input id="loginRememberMe" name="loginRememberMe" class="checkbox" type="checkbox" />
					<span class="label-text">Lembre-se de mim</span>
				</label>
			</div>

			<footer class="card-actions">
				<button type="submit">Login</button>
			</footer>
		</div>
	</form>
</section>

<style lang="scss">
	section {
		@apply grid auto-cols-auto grid-flow-col gap-4;

		& > form {
			@apply card card-bordered;

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
