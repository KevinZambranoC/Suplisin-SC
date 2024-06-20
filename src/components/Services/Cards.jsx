import React from 'react'


export const Cards = () => {
return (
<section className=" text-darkBlue bg-gradient-to-b from-gray-400/10 to-offWhite pb-12">
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12  sm:px-6 lg:py-16 lg:px-8">
<div className="mx-auto text-center w-3/5 w-full">
<h2 className="text-3xl font-bold sm:text-5xl">Asegurar tu comodidad es nuestra máxima prioridad</h2>
<p className="mt-4 text-gray-600">Nos dedicamos a ir más allá para crear un entorno donde te sientas realmente cómodo y protegido.</p>
</div>
<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
<a className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-gray-800 hover:shadow-gray-500/10 bg-white" href="/services/digital-campaigns">
<h2 className="mt-4 text-xl font-bold  text-darkBlue">Calzado Industrial</h2>
<p className="mt-1 text-sm text-gray-500">Ofrecemos una amplia gama de calzado industrial diseñado para proporcionar la máxima protección y comodidad en entornos de trabajo exigentes.</p>
</a>
<a className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-gray-800 hover:shadow-gray-500/10 bg-white" href="/services/digital-campaigns">
<h2 className="mt-4 text-xl font-bold  text-darkBlue">Personalización de Calzado</h2>
<p className="mt-1 text-sm text-gray-500">Trabaja con nuestro equipo para crear diseños únicos que se adapten a las necesidades específicas de tu entorno laboral, asegurando siempre la máxima protección y confort</p>
</a>
<a className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-gray-800 hover:shadow-gray-500/10 bg-white" href="/services/digital-campaigns">
<h2 className="mt-4 text-xl font-bold  text-darkBlue">Consultoría y Asesoramiento</h2>
<p className="mt-1 text-sm text-gray-500">Ofrecemos servicios de consulta y asesoramiento personalizados para ayudarte a seleccionar el calzado que mejor se adapte a las necesidades específicas de tu sector y equipo de trabajo.</p>
</a>
</div>
</div>
</section>
)
}

