import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Project() {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1668774097940-f36dfdaee149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80/" alt='first' />
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1668774097831-2e52807f7e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80" />
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1668774098006-4cd118fef8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
        </div>
      </Carousel>
    </div>
  )
}
