function ContactForm() {
  return (
    <div className='md:max-w-[445px] md:mx-auto pt-[45px] pb-[90px] lg:max-w-full lg:flex justify-between lg:gap-60 lg:items-start'>
      <div className='text-center lg:w-[50%] lg:text-left'>
        <h2 className='text-[30px] sm:text-lg font-semibold mb-3'>Contact</h2>
        <p
          className='textAlignLast pl-2 pr-2 text-justify'
        >
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form className=' pl-2 pr-2 mt-10 lg:w-[50%] lg:mt-0'>
        <div>
          <input
            className='outline-0 w-full mb-5 bg-transparent border-b pl-6 pb-4'
            type='text'
            placeholder='NAME'
          />
        </div>
        <div>
          <input
            className='outline-0 w-full mb-5 bg-transparent border-b pl-6 pb-4'
            type='text'
            placeholder='EMAIL'
          />
        </div>
        <div>
          <textarea
            className='outline-0 w-full mb-5 bg-transparent border-b pl-6'
            placeholder='MESSAGE'
            name=''
            id=''
            cols='30'
            rows='5'
          ></textarea>
        </div>
        <button className='block ml-auto uppercase border-b-[3px] border-secondary pb-3 font-light tracking-widest'>
          Send message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
