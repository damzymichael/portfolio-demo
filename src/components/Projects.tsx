import HeadingStar from './HeadingStar';
import {ArrowDiagonal} from './SVGs';
import onstord from '../assets/images/onstord_preview.gif';
import tobi from '../assets/images/tobi_preview.gif';
// import heartisan from '../assets/images/heartisan_preview.gif';
// import oculus from '../assets/images/oculus.gif';
import merch from '../assets/images/merch-store.gif';
import medfest from '../assets/images/medfest.png';
import mutual_gains from '../assets/images/mutual-gains.png';
import syncskills from '../assets/images/syncskills.png';
import oloja from '../assets/images/oloja.png';
import {motion} from 'framer-motion';

type Project = {
  imageSrc: string;
  title: string;
  description: string;
  url: string;
  stacks?: [];
};

const data: Project[] = [
  {
    imageSrc: syncskills,
    title: 'SyncSkills',
    description: 'Start a career in tech without having to code',
    url: 'https://www.syncskills.com.au'
  },
  {
    imageSrc: oloja,
    title: 'Oloja HUB',
    description:
      'A dynamic AI enabled platform that bridges the gap between individuals, business and services where you can buy, sell and gain business education',
    url: 'https://oloja.com.au'
  },
  {
    imageSrc: merch,
    title: 'Rhapsody Merch Store',
    description:
      'Web application for sale of customizable quality merch sweatshirts, round-necks, t-shirts and hoodies',
    url: 'https://merch-store.damzymike.com/'
  },
  {
    imageSrc: tobi,
    title: 'Tobi Closet',
    description:
      'E-commerce web application for the sale of quality thrift clothing',
    url: 'https://store.tobicloset.com'
  },
  {
    imageSrc: mutual_gains,
    title: 'Mutual Gains',
    description: 'Sign up to mutual gains to earn cash as you refer friends',
    url: 'https://mutual-gains.damzymike.com/'
  },
  {
    imageSrc: medfest,
    title: 'Medfest Care',
    description:
      'Saving for medical bills, Discovering health facilities near you and getting help from charitable individuals in the MFC community',
    url: 'https://medfestcareng.vercel.app'
  },
  {
    imageSrc: onstord,
    title: 'Onstord',
    description:
      'A web application for sharing educational resources between lectures and students',
    url: 'https://onstord-three.vercel.app'
  }
  // {
  //   imageSrc: heartisan,
  //   title: 'Heartisan',
  //   description:
  //     'A web application for the ordering handyman services for repairs, rennovations and constructions',
  //   url: 'https://heartisan-clients.vercel.app'
  // },
  // {
  //   imageSrc: oculus,
  //   title: 'Oculus',
  //   description: 'A landing page for a commercial AI website',
  //   url: 'https://oculus-sigma.vercel.app'
  // }
];

const variants = {
  initial: {opacity: 0, y: 150},
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {delay: index * 0.1}
  })
};

function Projects() {
  return (
    <>
      <HeadingStar heading='Projects' />
      <h3 className='font-semibold text-xl text-center mb-5 sm:mb-10'>
        Take a look at some of my <span className='text-[#00FF57]'>work</span>
      </h3>
      <div className='pContainer flex flex-wrap gap-5 sm:gap-10 justify-center relative'>
        {data.map(({imageSrc, title, description, url}, i) => (
          <motion.div
            variants={variants}
            initial='initial'
            whileInView='animate'
            viewport={{once: true}}
            custom={i}
            className='project w-11/12 sm:w-[45%] max-w-[500px] bg-[#FFFFFF1A] rounded-lg overflow-hidden pb-3'
            key={i}
          >
            <div className='max-h-52 overflow-hidden'>
              <img src={imageSrc} alt='' className='w-full' />
            </div>
            <div className='mt-3 mx-3 flex gap-2 items-center'>
              <span>
                <h3 className='font-bold text-xl'>{title}</h3>
                <p className='text-[#A9A9A9] text-xs sm:text-sm'>
                  {description}
                </p>
              </span>
              <a
                className='bg-[#9F40FE] p-2 rounded-full ml-auto cursor-pointer'
                target='_blank'
                href={url}
              >
                <ArrowDiagonal />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Projects;
