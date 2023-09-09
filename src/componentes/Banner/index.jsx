import { styled } from "styled-components";

const BannerEstilizado = styled.figure`
  display: flex;
  align-items: center;

  background-image: ${props => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  max-width: 100%;
  background-size: cover;
  height: 328px;
  border-radius: 20px;
  background-repeat: no-repeat;
  margin: 0;
  min-height: 328px;
`;

const TituloEstilizado = styled.h1`
  width: 301px;
  padding-left: 64px;
  margin: 0px;
  color: #ffffff;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Banner = ({texto, backgroundImage}) => {
  return (
    <BannerEstilizado $backgroundImage={backgroundImage}>
      <TituloEstilizado >
        {texto}
      </TituloEstilizado>
    </BannerEstilizado>
  );
};

export default Banner;
