import { styled } from "styled-components"
import banner from '../assets/banner.png'

const BannerEstilizado = styled.div`
    display: flex;
    align-items: center;

    background-image: url(${banner});
    width: 1156px;
    height: 328px;
    border-radius: 20px;
    background-repeat: no-repeat;

    p {
        width: 301px;
        padding-left: 64px;
        margin: 0px;
        color: #ffffff;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

`

const Banner = () => {
    return <BannerEstilizado>
        <p>A galeria mais completa de fotos do espaço!</p>
    </BannerEstilizado>
}

export default Banner