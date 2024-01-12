import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Kaman from './../../../image/카멘 등장.jpg';
import Illiakan from './../../../image/일리아칸.jpg';
import Biackiss from './../../../image/비아키스.jpg';
import Abrelshud from './../../../image/아브렐슈드.jpg';
import KoukuSaton from './../../../image/쿠크세이튼.jpg';
import Valtan from './../../../image/발탄.jpg';
import { styled } from 'styled-components';

const ImgSlider = () => {
  const ImageArr = [Kaman, Illiakan, Biackiss, Abrelshud, KoukuSaton, Valtan];

  const SliderSettings = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };
  // Banner slider의 세팅 옵션.

  return (
    <StyledSlider {...SliderSettings}>
      {ImageArr.map((img, index) => (
        <div key={index}>
          <Img src={img} />
        </div>
      ))}
    </StyledSlider>
  );
};

export default ImgSlider;

const Img = styled.img`
  width: 50%;
  height: 20%;
  margin: auto;
  margin-top: 2%;
`;
// @media ${({ theme }) => theme.DEVICE.mobile} {
//     /* position: absolute; */
//     /* top: 0;
//     left: -50%;
//     height: 250px; */
//     /* width: 1000px; */
//     width: 150%;
//     position: absolute;
//     top: 0;
//     left: -25%;
//     right: 0;
//     bottom: 0;
//     margin: auto;
//   }

//StyledSlider :Slider Arrow css
const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: -50px;
    top: 90px;
  }

  .slick-next {
    right: -40px;
    top: 90px;
  }

  .slick-prev::before,
  .slick-next::before {
    content: none;
  }

  .slick-slide {
    padding-right: 20px;
  }
`;
