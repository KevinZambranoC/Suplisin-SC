import React from 'react'
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export const Dropdown = () => {
    
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value); 

    return (
        <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[760px]">
            <div className="absolute inset-0 bg-white/10 sm:bg-transparent sm:from-white/30 sm:to-white/10 sm:bg-gradient-to-r"></div>
            <div className=" ml-30 relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-top">
                <div className="max-w-xl text-center sm:text-left mt-4">
                    <h1 className="text-4xl font-extrabold sm:text-5xl text-darkBlue">How to decide between new flooring system quotes
                    </h1>
                    <p className="my-6 max-w-lg text-bold sm:text-xl/relaxed text-darkBlue">Courtesy may not be the first thing people think of when it comes to flooring, but for us, it's one of the most important tools we carry</p>
                    <Accordion open={open === 1} className="mb-2 rounded-lg bg-lightGray shadow-lg px-4">
                        <AccordionHeader onClick={() => handleOpen(1)} className={`border-b-0 text-gray-600 hover:text-gray-800 transition-colors ${ open === 1 ? "text-gray-800 hover:!text-gray-500" : ""}`}>Features & Benefits</AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express ourselves and actualize our dreams.</AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} className="mb-2 rounded-lg bg-lightGray shadow-lg  my-4 px-4">
                        <AccordionHeader onClick={() => handleOpen(2)} className={`border-b-0 text-gray-600 hover:text-gray-800 transition-colors ${ open === 2 ? "text-gray-800 hover:!text-gray-500" : ""}`}>Solid Hardwoods</AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">We&apos;re not always in the position that we want to be at. We&apos;re constantlygrowing. We&apos;re constantly making mistakes. We&apos;re constantly trying to expressourselves and actualize our dreams.</AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} className="rounded-lg bg-lightGray shadow-lg  px-4">
                        <AccordionHeader onClick={() => handleOpen(3)} className={`border-b-0 text-gray-600 hover:text-gray-800transition-colors ${ open === 3 ? "text-gray-800 hover:!text-gray-500" : "" }`}>Ceramic, Porcelain and Stone Tile</AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">We&apos;re not always in the position that we want to be at. We&apos;re constantlygrowing. We&apos;re constantly making mistakes. We&apos;re constantly trying to expressourselves and actualize our dreams.</AccordionBody>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
