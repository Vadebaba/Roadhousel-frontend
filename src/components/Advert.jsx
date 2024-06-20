// eslint-disable-next-line no-unused-vars
import React from 'react';
import Marquee from 'react-fast-marquee';


const Advert = () => {


  return (
    <div className='advert'>
      <Marquee >
        <div className="flex text-center xl:gap-28 gap-[15rem] font-semibold">
          <div>
            <p>Promo Promo Promo! Get 30% off on all product.</p>
          </div>

          <div>
            <p>Promo Promo Promo! Get 30% off on all product.</p>
          </div>

          <div>
            <p>Promo Promo Promo! Get 30% off on all product.</p>
          </div>
        </div>
      </Marquee>



    </div>
  );
}

export default Advert