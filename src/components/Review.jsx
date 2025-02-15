/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";


const reviews = [
  {
    content: 'Faisal is a brilliant developer who approaches challenges with a calm and logical mindset. His attention to detail and focus on quality were evident throughout our project.',
    name: 'Jessica Brown',
    imgSrc: '/images/people-1.jpg',
    company: 'fiverr client'
  },
  {
    content: 'Faisal’s expertise in optimizing our application’s performance saved us valuable time and resources. His clear communication and professionalism made the entire process smooth and effective.',
    name: 'Samuel Stevens',
    imgSrc: '/images/people-2.jpg',
    company: 'fiverr client'
  },
  {
    content: 'The cooperation with Faisal was excellent throughout the preparation and duration of the contract. He was always ready to explain the workflow, offered valuable insights, and was extremely helpful. We received exactly what we requested, with the required quality. Excellent work.',
    name: 'Michael Lee',
    imgSrc: '/images/people-3.jpg',
    company: 'fiverr client'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Noah Williams',
    imgSrc: '/images/people-4.jpg',
    company: 'fiverr client'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Ava Thompson',
    imgSrc: '/images/people-5.jpg',
    company: 'fiverr client'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Jonathan',
    imgSrc: '/images/people-6.jpg',
    company: 'fiverr client'
  }
];


const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          What our customers say
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Review