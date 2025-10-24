import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm p-4">
      <motion.div
        className="relative max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 scrollbar-hide"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-t-2xl object-contain"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <div key={tag.id} className="relative group">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover-animation cursor-help"
                  />
                  <span className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-white text-xs rounded py-1 px-2 -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none z-10">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-indigo-400 hover:text-white"
                title="Open project in new tab"
              >
                View Project
                <img
                  src="assets/arrow-up.svg"
                  className="size-4"
                  alt="external link"
                />
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-1 font-medium text-neutral-500 cursor-not-allowed"
                title="Project link not available"
              >
                View Project
                <img
                  src="assets/arrow-up.svg"
                  className="size-4 opacity-50"
                  alt=""
                />
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
