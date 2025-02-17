import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1738746077329_endvsindodi3desktopcarousel.jpg" alt=""  className='border border-red w-full'/>

      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg" alt="" className='border border-red w-full'/>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slider;