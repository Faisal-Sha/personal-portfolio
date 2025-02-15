/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/project-1.png',
    title: 'Spreesuite',
    tags: ['Angular', 'Node.js', 'MariaDB', 'Kafka', 'ELK', 'ChartJS'],
    projectLink: 'https://spreesuite.com/'
  },
  {
    imgSrc: '/images/project-2.avif',
    title: 'ZYP Electric Bikes',
    tags: ['React', 'Golang', 'PostgreSQL', 'RabbitMQ', 'GraphQL', 'Docker'],
    projectLink: 'https://zyptechnologies.com/'
  },
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Spotify',
    tags: ['React', 'Node.js', 'Typescript', 'Webpack', 'Babel'],
    projectLink: 'https://github.com/Faisal-Sha/spotify-clone'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Netflix-GPT',
    tags: ['React', 'Redux', 'Frontend-Development'],
    projectLink: 'https://github.com/Faisal-Sha/netflix-gpt'
  },
  {
    imgSrc: '/images/git-locator.png',
    title: 'Git Visualizer',
    tags: ['Dark mode', 'API Integration', 'TailwindCSS', 'JavaScript'],
    projectLink: 'https://git-locator.netlify.app/'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Food Ordering App',
    tags: ['React', 'Redux', 'TailwindCSS', 'Parcel', 'Babel'],
    projectLink: 'https://github.com/Faisal-Sha/food-ordering-app'
  }
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work