import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Contact from "@/pages/Contact"
  
  export function AccordionDemo() {
    return (
        <>
        <div className="max-w-screen-xl mx-auto my-10">
      <Accordion type="single" collapsible className="w-full border-8 border[#e5e5e5] ">
        <AccordionItem value="item-1 " className=" border-8 border[#e5e5e5]">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className=" border-8 border[#e5e5e5]">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className=" border-8 border[#e5e5e5]">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Contact/>
      </div>
      </>
     
    )
  }

  export default AccordionDemo;
  