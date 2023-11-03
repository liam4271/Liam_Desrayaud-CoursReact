export const transformPost = ({
    id, description, title, thumbnail
}:{
    id: number;
    description: string;
    title: string;
    thumbnail: string;
}) => ({ id, title: title, description: description, image: thumbnail });	

