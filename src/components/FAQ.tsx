import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6">
            <AccordionTrigger className="text-lg font-semibold text-left">How secure is my journal data?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Your journal is protected with end-to-end encryption, biometric security, and passcodes. You have complete control over your data and can export it anytime.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6">
            <AccordionTrigger className="text-lg font-semibold text-left">What makes Psykick different from other journaling apps?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Psykick uses AI to provide personalized prompts based on your mood and emotional state, making each journaling session more meaningful and insightful.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6">
            <AccordionTrigger className="text-lg font-semibold text-left">Can I use Psykick offline?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes, Psykick works offline. Your entries are synchronized when you're back online, ensuring you never lose your thoughts.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-6">
            <AccordionTrigger className="text-lg font-semibold text-left">What types of media can I add to my journal?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              You can enhance your entries with photos, videos, audio recordings, and drawings. Express yourself in whatever way feels most natural.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};