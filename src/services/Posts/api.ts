export const fetchPosts = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const json  = await data.json();
    return json;
}