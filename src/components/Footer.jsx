function Footer() {
  return (
    <footer className='border-t pt-10 pb-10'>
      <div className='sm:flex sm:justify-between text-center w-[154px] mx-auto sm:w-full items-center'>
        <p className='text-md mb-5 md:mb-0'>MB</p>
        <ul className='flex gap-[25px]'>
          <li>
            <a href='#'>
              <img src='/images/icon-github.svg' alt='github link icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img
                src='/images/icon-frontend-mentor.svg'
                alt='frontend mentor link icon'
              />
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
      </div>
    </footer>
  );
}

export default Footer;
