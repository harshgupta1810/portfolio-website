import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function Privacy() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Effective Date: December 2024</p>
      </motion.div>

      <Card className="p-6 space-y-8 bg-background/95">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">a. Information You Provide Directly</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Contact information, such as your name and email address, provided through our contact form.</li>
                <li>Any messages or inquiries you send us.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">b. Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Usage data, including your IP address, browser type, operating system, and pages visited.</li>
                <li>Analytics data collected through tools such as Google Analytics to better understand user behavior and improve the website experience.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-2">
            The information collected is used for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>To respond to your inquiries, messages, or requests.</li>
            <li>To improve the functionality, design, and content of the website.</li>
            <li>To send updates, announcements, or other relevant communications, but only if you've explicitly consented to receive them.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p className="text-muted-foreground">
            We do not sell, trade, or rent your personal information to third parties. However, we may share information with trusted service providers who assist in operating the website or providing services to you. These parties are required to keep your information confidential and secure.
          </p>
          <p className="text-muted-foreground mt-2">
            We may also disclose your information if required to do so by law or to protect our legal rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-muted-foreground">
            We take reasonable measures to safeguard your personal information against unauthorized access, loss, misuse, or alteration. These measures include encrypted data transmission and secure servers.
          </p>
          <p className="text-muted-foreground mt-2">
            However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute data security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Links</h2>
          <p className="text-muted-foreground">
            This website may include links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to read their privacy policies before sharing your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground mb-2">
            Depending on your location, you may have rights under data protection laws, including the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Access the information we hold about you.</li>
            <li>Request corrections or updates to your information.</li>
            <li>Request the deletion of your data (subject to applicable legal obligations).</li>
          </ul>
          <p className="text-muted-foreground mt-2">
            To exercise these rights, please contact us at harshgup11@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground">
            We reserve the right to update this Privacy Policy as necessary to reflect changes to our practices or legal requirements. Updates will be posted on this page with the revised effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
          </p>
          <p className="text-muted-foreground mt-2">
            Email: harshgup11@gmail.com
          </p>
        </section>
      </Card>
    </div>
  )
}