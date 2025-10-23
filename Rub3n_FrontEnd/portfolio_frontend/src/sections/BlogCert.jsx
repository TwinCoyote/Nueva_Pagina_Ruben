import React from "react";
import { TracingBeam } from "../components/TracingBeam";
import { twMerge } from "tailwind-merge";

function BlogCert() {
  return (
    <TracingBeam className="px-6 pb-0">
      <div className="max-w-2xl mx-auto antialiased pt-4 pb-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4 font-bold">{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

export default BlogCert;

const dummyContent = [
  {
    title: "PLC - Conexiones Electricas",
    description: (
      <>
        <p
          id="1"
          className="text-base md:text-lg leading-relaxed dark:text-neutral-200"
        >
          During this PLC training focused on{" "}
          <strong>electrical connections and control logic</strong>, each
          participant was assigned an <strong>Allen-Bradley PLC</strong> to work
          with. Using provided wiring diagrams and real-world control
          requirements, we had to design and build the corresponding electrical
          setup step by step. The course lasted{" "}
          <strong>five Sundays of six hours each</strong>, combining theory and
          hands-on practice. Through this experience, I reinforced my
          understanding of industrial wiring, input/output configuration, and
          PLC troubleshooting in automation systems.
        </p>
      </>
    ),
    badge: "React",
    image: "/assets/Certificados/conexiones.jpg",
  },
  {
    title: "PLC - Programación Basica",
    description: (
      <>
        <p
          id="2"
          className="text-base md:text-lg leading-relaxed dark:text-neutral-200"
        >
          This was a continuation of the previous PLC course, focused on{" "}
          <strong>basic programming in Ladder and SCL languages</strong> for
          Siemens PLCs. The course lasted{" "}
          <strong>six Sundays of five hours each</strong>, combining theory and
          practical exercises. Although I already had experience with
          programming PLCs, this course allowed me to deepen my knowledge in{" "}
          <strong>logic design using Ladder language</strong> and reinforce
          structured programming techniques in SCL. Through hands-on practice, I
          strengthened my ability to create clear and reliable control logic for
          industrial automation systems.
        </p>
      </>
    ),
    badge: "PLC",
    image: "/assets/Certificados/plc2.jpg",
  },
  {
    title: "PLC - Programacion Avanzada",
    description: (
      <>
        <p
          id="3"
          className="text-base md:text-lg leading-relaxed dark:text-neutral-200"
        >
          In this continuation of the PLC training, the course lasted{" "}
          <strong>six days of five hours each</strong> and focused on more
          advanced industrial automation topics. Each participant was provided
          with a PLC along with <strong>IoT communication modules</strong>, and
          we began exploring{" "}
          <strong>HMI (Human-Machine Interface) design</strong>. The hands-on
          exercises allowed us to integrate the PLC with HMI screens, enabling
          real-time monitoring and control. This experience strengthened my
          understanding of modern automation systems, communication protocols,
          and interface design for industrial applications.
        </p>
      </>
    ),
    badge: "SCL lenguage for PLC",
    image: "/assets/Certificados/plc.png",
  },
];
