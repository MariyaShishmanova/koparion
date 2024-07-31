import Section from '../Section/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const reviews = [
  { text: "I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses ! Kudo's from the Netherlands !", author: 'Sandy Wilcke' },
  { text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni.adipisicing elit. Expedita, magni', author: 'John Smith' },
  { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in. Illum distinctio sed ducimus ea.', author: 'Lea Peters' }
];

export default function SectionReviews() {
  return (
    <Section className="section-reviews">
      <Swiper pagination={{clickable:true}} modules={[Pagination, Autoplay]} loop effect='slide' speed="900" autoplay={{ delay: 5000, disableOnInteraction: false }} className="mySwiper section-reviews__slider">
        {reviews.map((review, index) => {
          return (
            <SwiperSlide key={index} className='section-reviews__review'>
              {<>
              <div className="section-reviews__review-image">
               <FontAwesomeIcon fontSize="45px" icon={faQuoteRight}/>
              </div>

                <p className='section-reviews__review-text'>
                  {review.text}
                </p>

                <p className="section-reviews__review-author">{review.author}</p>
                </>
              }
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
}
