import {useReducer, useEffect, useRef, memo} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import './hamburger.css';

const variants = (delay = 0.5) => ({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
      delay
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {delay}
  }
});

const Header = memo(() => {
  const headerRef = useRef<HTMLDivElement>(null);
  const nav = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
  const [navOpen, toggleNavOpen] = useReducer(state => !state, false);
  useEffect(() => {
    //resize event listener
    // window.addEventListener('resize', () => {
    //   if (window.innerHeight < 768 && navOpen) toggleNavOpen();
    // });
    //click away listener to close the navbar
    function closeDropdown() {
      //!function must close the navbar
      if (navOpen) {
        toggleNavOpen();
        document.removeEventListener('click', closeDropdown);
      }
    }
    if (navOpen) document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, [navOpen]);
  return (
    <motion.header
      className='md:py-3 w-full fixed top-0 left-1/2 -translate-x-1/2 z-20 bg-gray-800'
      variants={{
        open: {backgroundColor: 'rgb(147 51 234)'},
        closed: {backgroundColor: 'rgb(31 41 55)'}
      }}
      animate={navOpen ? 'open' : 'closed'}
      onClick={e => e.stopPropagation()}
    >
      <div ref={headerRef}>
        {/* Desktop nav  */}
        <nav className='w-max hidden md:flex mx-auto gap-4'>
          {nav.map(nav => (
            <a href={'#' + nav.toLowerCase()} key={nav}>
              {nav}
            </a>
          ))}
        </nav>
        {/* Navigation button  */}
        <button
          id='navButton'
          className={'flex md:hidden hamburger ' + (navOpen ? 'open' : '')}
          onClick={toggleNavOpen}
        >
          {Array.from({length: 3}).map((_, i) => (
            <span key={i}></span>
          ))}
        </button>
        {/* Mobile nav  */}
        {/* Wrong use of variants  */}
        <AnimatePresence>
          {navOpen && (
            <motion.ul
              className={`bg-purple-600 w-full fixed left-0 top-${
                (headerRef.current?.offsetHeight as number) - 2
              } p-5 pt-2 md:hidden flex flex-col gap-3 overflow-hidden rounded-b-2xl`}
              initial={{height: 0, opacity: 0}}
              animate={{height: 'auto', opacity: 1}}
              exit={{height: 0, opacity: 0, transition: {delay: 0.2}}}
            >
              {nav.map((nav, i) => (
                <motion.a
                  className='text-left'
                  key={i}
                  href={'#' + nav.toLowerCase()}
                  initial={variants().closed}
                  animate={variants(i * 0.08).open}
                  exit={variants(1 / (i + 1)).closed}
                >
                  {nav}
                </motion.a>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
});

export default Header;
