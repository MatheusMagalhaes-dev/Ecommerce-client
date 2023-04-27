import { PUBLIC_API_URL } from "$env/static/public";
import type { IProduct } from "$lib/ts";

export const load = async () => {
    const [products] = await Promise.all([
        fetch(PUBLIC_API_URL + '/products').then<IProduct[]>((res) => res.json())
    ]);
    
    
    return { products }
}