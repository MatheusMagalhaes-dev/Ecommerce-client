<script lang="ts">

    export let data;
</script>
<h3 class="userLogin">Login</h3>

<h1>Produtos</h1>

<grid container spacing={3}>
<ul>
    {#each data.products as {_id, name, description, price}}
        <li>
            <a href="/products/{_id}">
            <h2>{name}</h2>
            <p>{description}</p>

            <footer>
                <span>R${price}</span>
            </footer>
            </a>
        </li>
    {/each}
</ul>
</grid>

<style>
    .userLogin {
      
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        list-style: none;
        padding: 0;
    }

    ul > li {
        background-color: #dcdcdc;
        border: 1px solid #333333;
    }
</style>