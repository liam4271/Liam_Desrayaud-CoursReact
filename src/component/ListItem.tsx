import Avatar from "./Avatar";
import styled from "@emotion/styled";


type Props = {
    avatar: string;
    name: string;
    onClick: () => void;
}

const ListItem = ({name, avatar, onClick} : Props ) =>{

    return ( 
    
        <ItemContainer onClick={onClick}>
            <Avatar src={avatar}/>
            {name}
        </ItemContainer>
    );

}

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 5rem;
    transition: background-color 0.25s;

    &:hover {
        background-color: rgb(209, 185, 185);
    }
    `

export default ListItem;