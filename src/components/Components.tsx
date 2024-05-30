import HeadingStar from './HeadingStar';
import AnimateSection from './AnimateSection';
import {ValuesData} from '../data';
import skill_logo from '../assets/svgs/skill-logo.svg';
import pear from '../assets/svgs/pear.svg';
import arrow from '../assets/svgs/arrow.svg';
import flipped_image from '../assets/images/flipped-image.png';

export const MyGoals = () => {
  return (
    <div>
      <HeadingStar heading='My goals' />
      <h4 className='text-[#E8BA40] text-lg text-center font-semibold mb-14 px-3'>
        Software developers around the globe certainly have goals and
        descipline, my goals are as followed.
      </h4>

      <div className='flex flex-col md:flex-row items-center relative gap-8 sm:gap-4 mb-10 px-5'>
        <img src={pear} alt='icon' className='w-12 absolute -top-10 left-2' />
        <div className='relative'>
          <p className='text-sm sm:text-base px-5 md:px-10'>
            Overall, web development is a dynamic and constantly evolving field
            that requires both technical skills and creativity. my goal as a
            full-stack dev is being a skilled web developer dedicated to
            building immersive websites that leave a lasting impression.
          </p>
          <img
            src={arrow}
            alt='arrow-icon'
            className='w-[108px] absolute -left-6'
          />
        </div>
        <img src={flipped_image} alt='flipped' className='w-4/5 md:w-1/3 ' />
      </div>
    </div>
  );
};

export const MyValues = () => {
  return (
    <section className='pb-10'>
      <HeadingStar heading='My values' />
      <h2 className='font-bold text-center mb-5 px-4'>
        Here are the <span className='text-[#00ff57]'>values</span> and{' '}
        <span className='text-[#9f40fe]'>qualities</span> I provide as a
        professional full-stack developer.
      </h2>
      <ul className='flex flex-wrap gap-2 sm:gap-3 justify-center mb-10 px-2'>
        {ValuesData.map((value, i) => (
          <li
            className={
              (i === 1 ? 'bg-[#9f40feb2]' : 'bg-[#ffffff33]') +
              ' py-2 px-2 sm:px-6 rounded-3xl text-xs sm:text-sm md:text-base w-2/5 sm:w-max text-center'
            }
            key={i}
          >
            {value.heading}
          </li>
        ))}
      </ul>
      {ValuesData.map((value, i) => (
        <AnimateSection key={i}>
          <div className='value flex flex-col md:flex-row gap-4 items-center px-16 justify-center'>
            <div className='md:w-2/5'>
              <h3 className='text-[#9f40fe] font-bold text-2xl mb-3'>
                {value.heading}
              </h3>
              <p>{value.description}</p>
            </div>
            <img
              src={value.imageString}
              alt='icon'
              className='w-3/5 md:w-2/5 min-w-[300px]'
            />
          </div>
        </AnimateSection>
      ))}
    </section>
  );
};

export const Services = () => {
  return (
    <>
      <HeadingStar heading='Services' />
      <div className='flex flex-wrap gap-4 justify-center relative overflow-hidden py-5'>
        {Array.from({length: 6}).map((_, i) => (
          <div
            key={i}
            className='w-11/12 sm:w-[45%] md:w-[30%] bg-[#FFFFFF1A] rounded-lg p-5'
          >
            <div className='border border-[#9F40FE] border-dashed rounded-full w-max mx-auto aspect-square flex items-center justify-center mb-3'>
              {/* Add dynamic value to alt text  */}
              <img src={skill_logo} alt='logo' className='w-3/5' />
            </div>
            <h2 className='uppercase font-semibold mb-3'>
              Front-end development
            </h2>
            <p className='mb-3'>
              I specialize in creating visually appealing and user-friendly
              interfaces for websites. I transform design concepts into
              interactive and responsive code, ensuring a seamless user
              experience.
            </p>
            <button className='bg-[#9F40FE] p-2 rounded-md'>Learn more</button>
          </div>
        ))}
        {/* bottom eclipse  */}
        <div className='eclipse w-[300px] rounded-full aspect-square bg-[#9F40FE80] absolute -bottom-[100px] right-1/2 translate-x-1/2' />
      </div>
    </>
  );
};
