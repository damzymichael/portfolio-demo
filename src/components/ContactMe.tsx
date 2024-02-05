import HeadingStar from './HeadingStar';
// background: #FFFFFF33;

//eslint-disable-next-line
export default () => {
  return (
    <section>
      <HeadingStar heading='Contact me' id='contact-me' />
      <div className='flex flex-col md:flex-row p-5 sm:p-10 justify-between'>
        <p className='mb-6 md:mb-10 text-left'>
          <div className='font-bold text-3xl sm:text-4xl text-[#FFFFFF33] mb-3'>
            Let's work together
          </div>
          <div className='italic mb-3'>
            "Every Innovation started with communication"
          </div>
          <div className='mb-3 pr-10'>
            Would like to reach out to me? fill the contact form and let's talk
          </div>
        </p>
        <form
          action=''
          className='text-white w-4/5 sm:w-1/2 min-w-[280px]'
          autoComplete='off'
        >
          <div className='border border-[#FFFFFFE5] p-2 mb-2'>
            <label htmlFor='name' className='text-white block'>
              Enter your name
            </label>
            <input
              type='text'
              id='name'
              required
              className='outline-none appearance-none block bg-black'
            />
          </div>

          <div className='border border-[#FFFFFFE5] p-2 mb-2'>
            <label htmlFor='email' className=' block'>
              Enter your email address
            </label>
            <input
              type='email'
              id='email'
              required
              className='outline-none appearance-none block bg-black'
            />
          </div>

          <div className='border border-[#FFFFFFE5] p-2 mb-2'>
            <label htmlFor='message' className=' block'>
              Enter your message
            </label>
            <textarea
              id='message'
              required
              rows={4}
              className='outline-none w-full appearance-none block bg-black'
            />
          </div>

          <button className='bg-[#9f40fe] px-3 py-3 rounded-lg'>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
