import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.ualberta.ca/index.html',
      name: 'Education',
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: 'I had went to University of Alberta from Sept 2012 to Sept 2017. I made several projects at university. I have a bachelor`s degree from university.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/raul-omarov-7841b7201/',
      name: 'University of Alberta',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "The University of Alberta in Edmonton is one of the top teaching and research universities in Canada, with an international reputation for excellence across the humanities, sciences, creative arts, business, engineering and health sciences..",
    },
    // {
    //   id: 3,
    //   link: 'https://www.linkedin.com/in/agasi-xalilov/',
    //   name: 'Ağası Xəlilov',
    //   role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
    //   test: 'I worked with Rasif in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    // },
    // {
    //   id: 4,
    //   link: 'https://www.linkedin.com/in/javid-aliyev-b343061b6/',
    //   name: 'Javid Aliyev',
    //   role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
    //   test: "I mentored Rasif some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing him best and going beyond the requirements of the project he's building.",
    // },
    // {
    //   id: 5,
    //   link: 'https://www.linkedin.com/in/elshad-bashirov-1907a1213/',
    //   name: 'Elshad Bashirov',
    //   role: 'Software Developer',
    //   test: "Throughout all our collaborations, Rasif has always conducted herself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    // },
  ];
  return (
    <section id="testmonials">
      <h5 style={{fontSize: "16px"}}>Bachelor of Science in Computer Science</h5>
      <h2>Education</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name' style={{fontSize: "16px"}}>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials