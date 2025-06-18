function ProjectSection() {
  const projectData = [
    {
      imageUrl: "/images/thumbnail-project-1-small.webp",
      title: "design portfolio",
      tags: ["HTML", "CSS"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      imageUrl: "/images/thumbnail-project-2-small.webp",
      title: "e-learning landing page",
      tags: ["HTML", "CSS"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      imageUrl: "/images/thumbnail-project-3-small.webp",
      title: "todo web app",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      imageUrl: "/images/thumbnail-project-4-small.webp",
      title: "entertainment web app",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      imageUrl: "/images/thumbnail-project-5-small.webp",
      title: "memory game",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      imageUrl: "/images/thumbnail-project-6-small.webp",
      title: "art gallery showcase",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      liveUrl: "",
      githubUrl: "",
    },
  ];
  return (
    <>
    <div className='mt-[60px] pl-2 pr-2 flex justify-between items-center pb-[50px]'>
        <h2 className='text-md sm:text-lg capitalize'>projects</h2>
        <a
          href=''
          className='text-sm sm:text-md uppercase border-b-[3px] border-secondary pb-3 font-light tracking-wide'
        >
          Contact me
        </a>
      </div>
    <div className='pb-[45px] sm:grid grid-cols-2 gap-x-6 pl-2 pr-2'>
      {projectData.map((project) => (
        <div className='mb-[30px]'>
          <img src={project.imageUrl} alt='' />
          <h3 className='mt-3 uppercase text-md font-semibold'>
            {project.title}
          </h3>
          <div className='color-dark-gray mb-[15px] mt-[5px] text-sm font-light flex gap-[15px]'>
            {project.tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </div>
          <div className='font-light text-sm flex gap-[20px]'>
            <a
              href='#'
              className='uppercase tracking-widest border-b-[3px] border-secondary pb-2'
            >
              View Project
            </a>
            <a
              href='#'
              className='uppercase tracking-widest border-b-[3px] border-secondary pb-2'
            >
              View Code
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default ProjectSection;
