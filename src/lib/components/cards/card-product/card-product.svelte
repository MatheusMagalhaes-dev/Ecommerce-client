<script lang="ts">
	import type { IProduct } from '$lib/ts';

	export let product: IProduct;
</script>

<article class="product">
	<div class="card-body">
		<h2>{product.name}</h2>
		<p>{product.description}</p>

		<footer>
			<span class="price">R${product.price}</span>
		</footer>
	</div>
</article>

<style lang="scss" global>
	article.product {
		@apply card card-bordered bg-base-200;
		
		& > .card-body {
			& > h2 {
				@apply text-lg text-primary mb-2;
			}

			& > p {
				@apply text-base-content/75 text-sm mb-4;
			}

			& > footer {
				
				& > span.price {
					@apply block text-2xl text-primary ml-auto;
				}
			}
		}
	}
</style>
