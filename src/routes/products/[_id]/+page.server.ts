import { PUBLIC_API_URL } from '$env/static/public';

export const load = async ({ params: { _id } }) => {
    const [product] = await Promise.all([
        fetch(PUBLIC_API_URL + '/products/' + _id).then((res) => res.json())
    ]);

    return { product };
};