import React from 'react'
import { Timeline } from '../components/TimeLine';
import api from "../services/api";
import { experiences } from "../constants/index";


const Experiences = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // console.log("Experiences component mounted");
    const fetchExperiences = async () => {
      try {
        const response = await api.get("/work-experience/");
        // console.log("API Response:", response.data);

        const formattedData = response.data.results.map((item) => ({
          title: item.titulo,
          job: item.puesto,
          date: item.fecha_years,
          contents: item.descripcion.split("\r\n").filter(Boolean),
          logo: item.logo,
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-20">Loading experiences...</div>;
  }

  return (
    <section className='w-full'>
      <Timeline data={data} />
    </section>
  )
}

export default Experiences