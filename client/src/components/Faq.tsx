import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How can I collaborate with you?",
    answer:
      "I'm open to various forms of collaboration, including project-based work, consulting, and full-time opportunities. Feel free to reach out through the contact form or email me directly to discuss potential collaborations.",
  },
  {
    question: "What types of projects do you work on?",
    answer:
      "I specialize in AI and Machine Learning projects, particularly in computer vision, natural language processing, and predictive analytics. I also work on data science projects and full-stack AI applications.",
  },
  {
    question: "Do you provide consulting services?",
    answer:
      "Yes, I offer consulting services in AI strategy, technical implementation, and project planning. I can help you evaluate AI opportunities, architect solutions, and guide implementation.",
  },
  {
    question: "What is your typical project process?",
    answer:
      "My process typically involves initial consultation, requirement gathering, solution design, iterative development with regular checkpoints, testing, and deployment. I maintain clear communication throughout the project lifecycle.",
  },
]

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}