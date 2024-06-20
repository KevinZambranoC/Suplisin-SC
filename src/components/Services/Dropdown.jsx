import React from 'react'
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export const Dropdown = () => {
    
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value); 

    return (
        <section className="relative bg-[url(https://i.ibb.co/PFN75sw/Captura-de-pantalla-794.png)] bg-cover bg-center bg-no-repeat h-[760px]">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 bg-white/10 sm:bg-transparent sm:from-white/30 sm:to-white/10 sm:bg-gradient-to-r"></div>
            <div className="ml-30 relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-top">
                <div className="max-w-xl text-center sm:text-left mt-4">
                    <h1 className="text-4xl font-extrabold sm:text-5xl text-white">Cómo decidir entre diferentes servicios de calzado industrial
                    </h1>
                    <p className="my-6 max-w-lg text-bold sm:text-xl/relaxed text-white">La cortesía puede no ser lo primero que la gente piensa en cuanto al calzado industrial, pero para nosotros, es una de las herramientas más importantes que llevamos.</p>
                    <Accordion open={open === 1} className="mb-2 rounded-lg bg-lightGray shadow-lg px-4">
                        <AccordionHeader onClick={() => handleOpen(1)} className={`border-b-0 text-gray-600 hover:text-gray-800 transition-colors ${ open === 1 ? "text-gray-800 hover:!text-gray-500" : ""}`}>Características y Beneficios</AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">En Suplisin, ofrecemos calzado industrial de alta calidad que proporciona comodidad, durabilidad y seguridad en entornos de trabajo exigentes. Nuestro calzado está diseñado para soportar condiciones extremas y proteger a los trabajadores de posibles riesgos.</AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} className="mb-2 rounded-lg bg-lightGray shadow-lg  my-4 px-4">
                        <AccordionHeader onClick={() => handleOpen(2)} className={`border-b-0 text-gray-600 hover:text-gray-800 transition-colors ${ open === 2 ? "text-gray-800 hover:!text-gray-500" : ""}`}>Calzado de Seguridad</AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">Nuestro calzado de seguridad está diseñado para proporcionar máxima protección en el lugar de trabajo. Cumplimos con las normativas internacionales y utilizamos materiales de primera calidad para garantizar la seguridad de tus empleados.</AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} className="rounded-lg bg-lightGray shadow-lg  px-4">
                        <AccordionHeader onClick={() => handleOpen(3)} className={`border-b-0 text-gray-600 hover:text-gray-800 transition-colors ${ open === 3 ? "text-gray-800 hover:!text-gray-500" : "" }`}>Calzado Personalizado</AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">Ofrecemos servicios de personalización para adaptar el calzado a las necesidades específicas de cada cliente. Trabajamos contigo para crear diseños únicos que aseguren la máxima protección y confort para tus empleados.</AccordionBody>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}