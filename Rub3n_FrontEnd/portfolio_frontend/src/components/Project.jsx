import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="group relative h-full bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
              {title}
            </h3>
            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-cyan-500/10 transition-colors duration-300">
              <img src="assets/arrow-right.svg" className="w-4 h-4 text-neutral-400 group-hover:text-cyan-400" />
            </div>
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-neutral-300 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-all duration-300"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 font-semibold hover:from-cyan-500/30 hover:to-blue-500/30 hover:text-white hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          View Details
          <svg
            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;