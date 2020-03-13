$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    adaptiveWidht:true,

    responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.sale-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    adaptiveWidht: true,
    autoplay: true,
    dots:true
  });


  const prev = document.querySelector("#carousel > button.slick-prev.slick-arrow");
  const next = document.querySelector("#carousel > button.slick-next.slick-arrow");

  prev.style.display = 'none';
  next.style.display = 'none';

  document.querySelector('#prev-btn').onclick = () => prev.click();
  document.querySelector('#next-btn').onclick = () => next.click();

  const prevSale = document.querySelector(".sale-slider > button.slick-prev.slick-arrow")
  const nextSale = document.querySelector(".sale-slider > button.slick-next.slick-arrow")
  
  prevSale.style.display = 'none';
  nextSale.style.display = 'none';

  document.querySelector('#prev-btn-sale').onclick = () => prevSale.click();
  document.querySelector('#next-btn-sale').onclick = () => nextSale.click();

});

window.onresize = function () {
  const prev = document.querySelector("#carousel > button.slick-prev.slick-arrow");
  const next = document.querySelector("#carousel > button.slick-next.slick-arrow");
  document.querySelector('#prev-btn').onclick = () => prev.click();
  document.querySelector('#next-btn').onclick = () => next.click();

  const prevSale = document.querySelector(".sale-slider button.slick-prev.slick-arrow");
  const nextSale = document.querySelector(".sale-slider button.slick-next.slick-arrow");
  document.querySelector('#prev-btn-sale').onclick = () => prevSale.click();
  document.querySelector('#next-btn-sale').onclick = () => nextSale.click();

};


