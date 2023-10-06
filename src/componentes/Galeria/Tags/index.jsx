import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TituloTags = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  width: 279px;
  display: inline-block;
`;

const ItemTags = styled.button`
  color: #ffffff;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  padding: 10px 8px;
  border: 2px solid rgba(217, 217, 217, 0);
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.3);

  &:hover {
    border: 2px solid;
    border-color: #c98cf1;
  }
`;

const Tags = ({setTag}) => {
  return (
    <TagsContainer>
      <TituloTags>Busque por tags:</TituloTags>
      {tags.map(tag => 
        <ItemTags key={tag.id} onClick={() => setTag(tag.id)}>{tag.titulo}</ItemTags>
      )}
    </TagsContainer>
  );
};

export default Tags;
