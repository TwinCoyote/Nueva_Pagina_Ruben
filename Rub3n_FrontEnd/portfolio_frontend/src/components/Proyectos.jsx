import { useEffect, useState } from "react";

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/proyectos/`)
      .then((res) => res.json())
      .then((data) => {
        setProyectos(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className="c-space my-20">
      <p className="head-text">My Personal Projects</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {proyectos.map((proyecto) => (

        <div key={proyecto.id} className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            

          <div className="absolute top-0 right-0">

            <img />

          </div>
        </div>

         ))}
      </div>
    </section>
  );
};

export default Proyectos;
