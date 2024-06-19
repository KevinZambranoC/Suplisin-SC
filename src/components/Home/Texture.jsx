import React from 'react';

export const Texture = () => {
    return (
        <section className="relative h-auto sm:h-[1210px] lg:h-[860px] mb-20 overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-300"
                style={{ backgroundImage: 'url(https://i.ibb.co/jzGWKmJ/Captura-de-pantalla-754.png)' }}>
            </div>
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition duration-300"></div>
            <div className="relative z-10 h-full p-8 md:p-12 lg:px-16 lg:py-24 flex flex-col items-center justify-center text-center sm:text-left">
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Fabricante y Distribuidor Privado</h2>
                <p className="max-w-2xl text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed mt-6">
                    En Suplisin, colaboramos exclusivamente con fabricantes y distribuidores privados para asegurar que cada modelo de calzado industrial que ofrecemos cumpla con las especificaciones y normativas técnicas más exigentes. Esta relación nos permite mantener un control riguroso sobre la calidad y la innovación en nuestros productos, garantizando que siempre tengas acceso al mejor calzado de seguridad del mercado.
                </p>
                <div className="p-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    <div className="relative bg-white/[.70] rounded-lg shadow-xl w-full text-center">
                        <img alt="Supli C33" src="https://i.ibb.co/YTQKdWD/Whats-App-Image-2024-06-09-at-1-45-31-PM-12.jpg" className="h-64 w-full rounded-t-lg object-cover absolute top-0 left-0 right-0" />
                        <div className="p-4 mt-64">
                            <h3 className="text-lg font-semibold text-gray-900 sm:text-2xl">Supli C33</h3>
                            <p className="mt-2 text-gray-700">El ideal de la Industria.</p>
                        </div>
                    </div>
                    <div className="relative bg-white/[.70] rounded-lg shadow-xl w-full text-center">
                        <img alt="Supli A14" src="https://i.ibb.co/M7w6hv1/Whats-App-Image-2024-06-09-at-1-45-31-PM-6.jpg" className="h-64 w-full rounded-t-lg object-cover absolute top-0 left-0 right-0" />
                        <div className="p-4 mt-64">
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">Supli A14</h3>
                            <p className="mt-2 text-gray-700">El ideal del Soldador.</p>
                        </div>
                    </div>
                    <div className="relative bg-white/[.70] rounded-lg shadow-xl w-full text-center sm:hidden md:block">
                        <img alt="Supli B26" src="https://i.ibb.co/MBTFYs4/Whats-App-Image-2024-06-09-at-1-45-31-PM-3.jpg" className="h-64 w-full rounded-t-lg object-cover absolute top-0 left-0 right-0" />
                        <div className="p-4 mt-64">
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">Supli B26</h3>
                            <p className="mt-2 text-gray-700">El ideal del trabajo duro.</p>
                        </div>
                    </div>
                    <div className="relative bg-white/[.70] rounded-lg shadow-xl w-full text-center sm:hidden lg:block">
                        <img alt="Supli D05" src="https://i.ibb.co/Sc3w9yx/Whats-App-Image-2024-06-09-at-1-45-31-PM-1.jpg" className="h-64 w-full rounded-t-lg object-cover absolute top-0 left-0 right-0" />
                        <div className="p-4 mt-64">
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">Supli D05</h3>
                            <p className="mt-2 text-gray-700">El ideal en construcción.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}