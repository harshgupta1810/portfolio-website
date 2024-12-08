import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function Terms() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: December 2024</p>
      </motion.div>

      <Card className="p-6 space-y-6 bg-background/95">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By accessing this portfolio website ("Site"), you agree to these Terms of Service.
            Please read them carefully before using the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
          <p className="text-muted-foreground">
            The content on this Site, including but not limited to text, graphics, logos, 
            images, code samples, and project descriptions, is owned by Harsh Gupta and is 
            protected by intellectual property laws. You may not use, reproduce, or distribute 
            the content without explicit written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Project Showcase</h2>
          <p className="text-muted-foreground">
            The projects showcased on this Site are presented for informational and 
            demonstration purposes only. While code samples and project descriptions are 
            shared, they may not be used for commercial purposes without permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Professional Information</h2>
          <p className="text-muted-foreground">
            All professional information, including work experience, skills, and achievements, 
            is presented accurately and truthfully. However, some details may be subject to 
            non-disclosure agreements with previous employers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Contact Form Usage</h2>
          <p className="text-muted-foreground">
            The contact form on this Site is intended for professional inquiries only. 
            By using the contact form, you agree to provide accurate information and to 
            not use it for spam, harassment, or any unlawful purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Third-Party Links</h2>
          <p className="text-muted-foreground">
            This Site may contain links to external websites or resources (such as GitHub, 
            LinkedIn, etc.). These links are provided for convenience only, and I am not 
            responsible for the content or reliability of externally linked sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Disclaimer</h2>
          <p className="text-muted-foreground">
            This Site is provided "as is" without any warranties, express or implied. 
            While I strive to keep the information up to date and accurate, I make no 
            representations or warranties about the completeness, accuracy, reliability, 
            or availability of the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="text-muted-foreground">
            I reserve the right to modify these terms at any time. Continued use of the 
            Site following any changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms of Service, please contact me at:
            <br />
            Email: harshgup11@gmail.com
          </p>
        </section>
      </Card>
    </div>
  )
}