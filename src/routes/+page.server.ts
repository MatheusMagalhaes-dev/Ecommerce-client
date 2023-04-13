import { PUBLIC_API_URL } from "$env/static/public";

export const load = async () => {
    const [users, products] = await Promise.all([
        fetch(PUBLIC_API_URL + '/users').then((res) => res.json()),
        fetch(PUBLIC_API_URL + '/products').then((res) => res.json())
    ]);
    
    return { users, products }
}