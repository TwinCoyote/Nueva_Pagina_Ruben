import { useEffect, useMemo, useState } from "react";
import { TracingBeam } from "../components/TracingBeam";
import api from "../services/api";

const formatDate = (value) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};


const getTechLogo = (techName) => {
  const logoMap = {
    // Frontend
    react:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    vue: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vue/vue-original.svg",
    angular:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    svelte:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    javascript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    typescript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    html5:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",

    // Backend
    python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    django:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    flask:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    nodejs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    express:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    csharp:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    dotnet:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnet/dotnet-original.svg",
    php: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    laravel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-plain.svg",

    // Databases
    postgresql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    mysql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    mongodb:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    firebase:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",

    // Tools & Others
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    kubernetes:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
    next: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    nextjs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    webpack:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
    vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    graphql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    rest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/restframework/restframework-line.svg",
    aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
    google:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    azure:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  };

  if (!techName) return null;
  const key = techName.toLowerCase().replace(/\s+/g, "");
  return logoMap[key] || null;
};

const fallbackProjects = [
  {
    id: 999,
    titulo: "Sistema de Monitoreo Industrial (Demo)",
    descripcion:
      "Sistema integral para el monitoreo en tiempo real de variables críticas en líneas de producción. Incluye dashboard interactivo, alertas automáticas y reportes históricos. Este proyecto demuestra la integración entre hardware IoT y control de software.",
    tecnologias: ["IoT", "React", "Node.js"],
    imagen: "assets/coding-pov.png",
    imagenes: [],
    github: "https://github.com",
    link: "https://google.com",
    fecha_creacion: new Date().toISOString(),
  },
  {
    id: 1000,
    titulo: "Portfolio Personal Avanzado (Demo)",
    descripcion:
      "Plataforma web moderna diseñada para mostrar experiencia profesional y proyectos. Utiliza animaciones fluidas, diseño responsive y optimización de rendimiento. Sirve como ejemplo de capacidades de desarrollo frontend.",
    tecnologias: ["React", "Tailwind", "Motion"],
    imagen: "assets/grid.png",
    imagenes: [],
    github: "https://github.com",
    link: "https://google.com",
    fecha_creacion: new Date().toISOString(),
  },
];

function BlogCert() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageIndices, setImageIndices] = useState({});

  useEffect(() => {
    let mounted = true;

    const loadProjects = async () => {
      try {
        const { data } = await api.get("/proyectos/");
        if (!mounted) return;
        setProjects(data?.results ?? []);
      } catch (err) {
        console.error("API Error, using fallback data:", err);
        if (mounted) {
          setProjects(fallbackProjects);
          // We don't set error state so the user sees the projects instead of an error message
          // setError("No se pudieron cargar los proyectos."); 
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      mounted = false;
    };
  }, []);

  const isEmpty = useMemo(
    () => projects.length === 0 && !loading && !error,
    [projects, loading, error]
  );

  const handleImageNav = (projectId, direction, totalImages) => {
    setImageIndices((prev) => {
      const currentIndex = prev[projectId] || 0;
      let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
      newIndex = (newIndex + totalImages) % totalImages;
      return { ...prev, [projectId]: newIndex };
    });
  };

  return (
    <TracingBeam className="px-6 pb-0">
      <div className="max-w-3xl mx-auto antialiased pt-8 pb-4 relative">
        {loading && (
          <p className="text-sm text-neutral-400 text-center py-8">
            Cargando proyectos...
          </p>
        )}
        {error && (
          <p className="text-sm text-red-400 text-center py-8">{error}</p>
        )}
        {isEmpty && (
          <p className="text-sm text-neutral-400 text-center py-8">
            Aún no hay proyectos para mostrar.
          </p>
        )}

        {projects.map((item, index) => {
          const createdLabel = formatDate(item.fecha_creacion);
          // Default technology label if missing
          const tecnologiaLabel =
            typeof item.tecnologias?.[0] === "string"
              ? item.tecnologias[0]
              : item.tecnologias?.[0]?.nombre ?? "Proyecto Destacado";

          // Handle missing images with a default placeholder
          const defaultImage = "assets/grid.png";
          const imgPrincipal = item.imagen ? [item.imagen] : [];
          const imgsAdicionales = Array.isArray(item.imagenes)
            ? item.imagenes.map((img) => img.imagen).filter(Boolean)
            : [];

          let imagenes = [...imgPrincipal, ...imgsAdicionales];
          if (imagenes.length === 0) {
            imagenes = [defaultImage];
          }

          const currentImageIndex = imageIndices[item.id] || 0;
          const currentImage = imagenes[currentImageIndex];

          // Default title and description
          const displayTitle = item.titulo || "Proyecto en Desarrollo";
          const displayDesc = item.descripcion || "Descripción no disponible por el momento.";

          return (
            <article
              key={`content-${item.id ?? index}`}
              className="mb-20 group"
            >
              <div className="relative">
                {/* Línea decorativa superior */}
                <div className="absolute -left-8 top-0 w-1 h-16 bg-gradient-to-b from-cyan-500 to-transparent hidden md:block" />

                {/* Contenedor principal con efecto background */}
                <div className="relative bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm p-8 hover:border-cyan-500/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                  {/* Header con badge y fecha */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest">
                        {tecnologiaLabel}
                      </h2>
                    </div>
                    {createdLabel && (
                      <span className="text-xs text-neutral-400 font-mono">
                        {createdLabel}
                      </span>
                    )}
                  </div>

                  {/* Título con mejor jerarquía */}
                  <h3 className="text-3xl md:text-4xl mb-8 font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent group-hover:via-cyan-50 transition-all duration-300">
                    {displayTitle}
                  </h3>

                  {/* Carrusel de imágenes mejorado */}
                  {imagenes.length > 0 && (
                    <div className="mb-8 relative group/carousel">
                      <div className="rounded-xl overflow-hidden border border-white/10 group-hover/carousel:border-cyan-500/50 transition-all duration-300">
                        <div className="relative overflow-hidden bg-black/50">
                          <img
                            src={currentImage}
                            alt={displayTitle}
                            className="w-full h-96 object-cover group-hover/carousel:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                          {/* Overlay gradiente */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300" />

                          {/* Indicador de imagen */}
                          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-white font-semibold border border-white/20">
                            {currentImageIndex + 1} / {imagenes.length}
                          </div>
                        </div>
                      </div>

                      {/* Botones de navegación */}
                      {imagenes.length > 1 && (
                        <>
                          <button
                            onClick={() =>
                              handleImageNav(item.id, "prev", imagenes.length)
                            }
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm group-hover/carousel:opacity-100 opacity-0"
                            aria-label="Imagen anterior"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() =>
                              handleImageNav(item.id, "next", imagenes.length)
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm group-hover/carousel:opacity-100 opacity-0"
                            aria-label="Siguiente imagen"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>

                          {/* Puntos indicadores */}
                          <div className="flex justify-center gap-2 mt-4">
                            {imagenes.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() =>
                                  setImageIndices({
                                    ...imageIndices,
                                    [item.id]: imgIndex,
                                  })
                                }
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${imgIndex === currentImageIndex
                                  ? "bg-cyan-400 w-8"
                                  : "bg-white/20 hover:bg-white/40"
                                  }`}
                                aria-label={`Ir a imagen ${imgIndex + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Descripción */}
                  <div className="text-base text-neutral-300 leading-relaxed mb-8 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl border border-white/10">
                    <p>{displayDesc}</p>
                  </div>

                  {/* Enlaces principales (GitHub y Link) */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white border border-gray-500/50 hover:border-gray-400 transition-all duration-300 font-semibold group/btn"
                      >
                        <svg
                          className="w-5 h-5 group-hover/btn:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 hover:from-cyan-500/40 hover:to-blue-500/40 hover:text-cyan-100 transition-all duration-300 font-semibold group/btn"
                      >
                        <svg
                          className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Ver proyecto
                      </a>
                    )}

                    {item.videos && (
                      <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 border border-purple-500/50 text-sm font-semibold">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                        Video incluido
                      </span>
                    )}
                  </div>

                  {/* Tecnologías */}
                  {item.tecnologias?.length > 0 && (
                    <div className="pt-8 border-t border-white/10">
                      <p className="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-5">
                        Stack Tecnológico
                      </p>
                      <div className="flex flex-wrap gap-5">
                        {item.tecnologias.map((tech, techIndex) => {
                          const label =
                            typeof tech === "string"
                              ? tech
                              : tech?.name ??
                              tech?.nombre ??
                              `Tech ${techIndex + 1}`;
                          const logoUrl = getTechLogo(label);

                          return (
                            <div
                              key={`tech-${index}-${techIndex}`}
                              className="group/tech"
                              title={label}
                            >
                              {logoUrl ? (
                                <div className="flex flex-col items-center gap-2">
                                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/20 group-hover/tech:border-cyan-500/60 group-hover/tech:from-white/20 group-hover/tech:to-white/[0.08] transition-all duration-300 group-hover/tech:shadow-lg group-hover/tech:shadow-cyan-500/30">
                                    <img
                                      src={logoUrl}
                                      alt={label}
                                      className="w-10 h-10 object-contain filter grayscale group-hover/tech:grayscale-0 transition-all duration-300 opacity-75 group-hover/tech:opacity-100"
                                      loading="lazy"
                                    />
                                  </div>
                                  <span className="text-xs text-neutral-400 group-hover/tech:text-cyan-300 transition-colors text-center max-w-[80px]">
                                    {label}
                                  </span>
                                </div>
                              ) : (
                                <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold hover:border-emerald-400 hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300">
                                  {label}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </TracingBeam>
  );
}

export default BlogCert;
