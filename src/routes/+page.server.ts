import { PUBLIC_API_URL } from "$env/static/public";

export const load = async () => {
    const [products] = await Promise.all([
        fetch(PUBLIC_API_URL + '/products').then((res) => res.json())
    ]);
    
    return { products }
}