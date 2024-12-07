import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { ContactInfo } from "@/components/ContactInfo"
import { Faq } from "@/components/Faq"
import { useState } from "react"
import { useToast } from "@/hooks/useToast"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      form.reset()
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-20">
      {/* Contact Form Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </div>
          <ContactInfo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </Card>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <Faq />
      </section>
    </div>
  )
}