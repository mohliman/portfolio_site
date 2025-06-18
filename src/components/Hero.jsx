function Hero() {
  return (
    <div className='pt-[15px] pb-[90px] sm:bg-pic-tablet bg-contain bg-no-repeat bg-right'>
      <header className='sm:hidden mx-auto  w-[174px] bg-pic-mobile bg-cover h-[383px]'>
        <span className='text-center block text-md mb-[15px]'>MB</span>
        <ul class=' p-[10px] flex justify-around gap-[25px]'>
          <li>
            <a href='#'>
              <img src='/images/icon-github.svg' alt='github link icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/images/icon-linkedin.svg' alt='linkedin link icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/images/icon-twitter.svg' alt='twitter link icon' />
            </a>
          </li>
        </ul>
      </header>

      <header className='hidden sm:flex justify-between'>
        <span className='block text-4xl'>MB</span>
        <ul class='flex pr-5 justify-around gap-[25px] sm:pl-5'>
          <li>
            <a href='#'>
              <img src='/images/icon-github.svg' alt='github link icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/images/icon-linkedin.svg' alt='linkedin link icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/images/icon-twitter.svg' alt='twitter link icon' />
            </a>
          </li>
        </ul>
      </header>

      <div className='text-center sm:text-left sm:w-[60%] sm:mt-20'>
        <h1 className='text-[35px] sm:text-6xl leading-tight mt-[40px] mb-[34px] font-bold'>
          Nice to meet you!{" "}
          <span>
            I'm{" "}
            <span className='border-b-[5px] border-secondary pb-[-1000px]'>
              Muhammad Baqir
            </span>
            .
          </span>
        </h1>
        <p
          className='textAlignLast clamp-text text-justify mb-[34px] pl-3 pr-3 sm:p-0'
        >
          Based in 🇳🇬, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <a
          href=''
          className='text-md uppercase border-b-[3px] border-secondary pb-3 tracking-wide'
        >
          Contact me
        </a>
      </div>
    </div>
  );
}

export default Hero;
