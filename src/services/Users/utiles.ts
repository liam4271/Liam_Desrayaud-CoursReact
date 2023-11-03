export const transformUser = ({
    id, firstname, lastname, image
}:{
    id: number;
    firstname: string;
    lastname: string;
    image: string;
}) => ({ id, name: `${firstname} ${lastname}`, avatar: image });	

