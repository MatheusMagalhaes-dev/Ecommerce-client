<script lang="ts">
	import CardProduct from "$lib/components/cards/card-product/card-product.svelte";
    export let data;
</script>


<h1>Produtos</h1>

<ul class="products">
    {#each data.products as product}
        <li>
            <a href="/products/{product._id}">
            <CardProduct {product} />
            </a>
        </li>
    {/each}
</ul>

<style lang="scss" global>
    h1 {
        @apply text-3xl mb-8;
    }

    ul.products {
        @apply grid grid-flow-col auto-cols-fr gap-4;

        & > li {
            @apply col-auto;

            & > a {
                @apply block;
            }
        }
    }
</style>