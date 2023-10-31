
import styled from "@emotion/styled";
import ImagePost from "./ImagePost";


type Props = {
    image: string;
    description: string;
    title: string;
    onClick: () => void;
}

const ListItem = ({image, description, title, onClick} : Props ) =>{

    return ( 
    
        <ItemContainer >
            <button onClick={onClick} >X</button >
            <h3>{title}</h3> 
            <ImagePost src={image}/>
            <p>{description}</p>
        </ItemContainer>
    );

}
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: background-color 0.25s;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f3f3f3;
  }

  & > * {
    margin: 0;
  }

  & > h3 {
    font-size: 1.2rem;
  }

  & > p {
    font-size: 1rem;
    color: #333;
  }
`;

export default ListItem;