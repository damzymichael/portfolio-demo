import {motion} from 'framer-motion';
import skater from '../assets/images/hero-img.png';
import Vector from '../assets/svgs/orange-star.svg';
import TypingText from './TypingText';
import {memo, useState, useRef, useEffect} from 'react';

const textSection = {
  hidden: {y: 40, opacity: 0},
  visible: {
    y: 0,
    opacity: 1
  }
};

// function usePrevious<T>(value: T) {
//   const ref = useRef<T>();

//   useEffect(() => {
//     ref.current = value;
//   }, [value]);

//   return ref.current;
// }

// eslint-disable-next-line
export default memo(() => {
  const animatedText = 'Transforming ideas into powerful software solutions';
  // const [state, setState] = useState(0);
  // const previous = usePrevious(state);
  return (
    <>
      <motion.div
        className='w-[95%] sm:w-3/5 relative'
        variants={textSection}
        transition={{duration: 0.5}}
        animate='visible'
        initial='hidden'
      >
        <img
          src={Vector}
          alt='icon'
          className='hidden sm:block w-5 z-10 absolute -top-6 left-1/2'
        />
        {/* Moving text  */}
        <TypingText />
        <p className='max-w-[650px] mb-5'>
          Crafting digital experiences that leave a lasting impression. Explore
          my web development portfolio and witness the power of innovation and
          creativity.
        </p>
        <a
          className='contact p-2 rounded-[50px] flex items-center gap-2 w-max'
          // onClick={() => setState(current => current + 1)}
          href='#contact-me'
        >
          <div className='w-10 h-10 rounded-full bg-[#FF9900]' />
          <div className='text-left text-sm pr-1'>
            <p className='font-semibold'>Email me</p>
            <p>damzymike@gmail.com</p>
            {/* <p>{previous}</p>
            <p>{state}</p> */}
          </div>
        </a>
      </motion.div>
      {/* Change pic to me popping out the box  */}
      <motion.div className='relative aspect-square rounded-full overflow-hidden border border-[#9F40FE]'>
        <motion.img
          src={skater}
          alt='Skater'
          className='w-full aspect-square object-cover'
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          animate={{opacity: 1, scale: 1}}
          initial={{opacity: 0, scale: 0.5}}
        />
        <div className='size-[300px] lg:size-[320px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute inset-0 overflow-hidden'>
          <motion.svg
            className='overflow-hidden size-[300px] lg:size-[320px]'
            fill='transparent'
            viewBox='0 0 400 400'
            xmlns='http://www.w3.org/2000/svg'
          >
            <motion.circle
              cx='200'
              cy='200'
              r='220'
              stroke='#9F40FE'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
              initial={{strokeDasharray: '24 10 0 0'}}
              animate={{
                strokeDasharray: ['15 120 25 25', '16 25 97 72', '4 250 22 22'],
                rotate: [120, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          </motion.svg>
        </div>
      </motion.div>

      {/* <div className='h-full w-full relative'>
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2, duration: 0.4, ease: 'easeInOut'}
          }}
          className='py-8 lg:py-0'
        >
          <motion.div
            initial={{opacity: 0}}
            animate={{
              opacity: 1,
              transition: {delay: 2.4, duration: 0.4, ease: 'easeInOut'}
            }}
            className='w-[298px] absolute rounded-full h-[298px] xl:w-[320px] xl:h-[320px] mix-blend-lighten'
          >
            <img src={skater} alt='Skater' />
          </motion.div>

          <motion.svg
            className='w-[300px] overflow-visible h-[300px] lg:w-[320px]  lg:h-[320px]'
            fill='transparent'
            viewBox='0 0 400 400'
            xmlns='http://www.w3.org/2000/svg'
          >
            <motion.circle
              cx='200'
              cy='200'
              r='220'
              stroke='#00ff99'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
              initial={{strokeDasharray: '24 10 0 0'}}
              animate={{
                strokeDasharray: ['15 120 25 25', '16 25 97 72', '4 250 22 22'],
                rotate: [120, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          </motion.svg>
        </motion.div>
      </div> */}

      <aside className='absolute -bottom-5 max-h-14 w-screen'>
        <div className='marquee-section'>
          <div className='marquee-div'>
            <div className='marquee'>
              <p className='uppercase text-5xl tracking-[-0.11em] font-bold text-[#FFFFFF1A] inline'>
                {animatedText.repeat(4)}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
});
