import { Image } from "../Types";

export async function getImage(): Promise<Image[] | void>{
    const url = 'https://jsonplaceholder.typicode.com/photos'

    const response = await fetch(url);

    const data = await response.json();

    return Array.isArray(data) ? data : [];
}