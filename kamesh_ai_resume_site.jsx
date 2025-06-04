// Standalone Web Page for Kamesh Vedula’s AI Agent + Resume
// Use with Vercel or similar host

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function KameshPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">🤖 Meet Kamesh Vedula's AI Agent</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Discover Kamesh's career journey, skills, and projects — in an interactive way.
        </p>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">🧠 Ask the GPT Agent:</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>What did Kamesh do at Redbird?</li>
              <li>Can you walk me through Kamesh’s career?</li>
              <li>What technical skills does he have?</li>
              <li>What are some side projects?</li>
              <li>What’s his leadership style?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">📄 Resume Preview</h2>
            <iframe
              src="https://drive.google.com/file/d/1j3U4N0l3shEBfVdE90rPJ1T0NrjeAdaU/preview"
              width="100%"
              height="500"
              allow="autoplay"
              className="rounded-xl shadow-md"
            ></iframe>
            <div className="flex justify-between mt-4">
              <Button asChild>
                <a href="https://drive.google.com/file/d/1j3U4N0l3shEBfVdE90rPJ1T0NrjeAdaU/view?usp=sharing" target="_blank">
                  <Download className="mr-2 w-4 h-4" /> Download PDF
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/kvedula1998/" target="_blank">
                  <Linkedin className="mr-2 w-4 h-4" /> View LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Built with ❤️ by Kamesh Vedula · Powered by GPT-4 · Hosted on Vercel
          </CardContent>
        </Card>
      </motion.div>
    </main>
  )
}
