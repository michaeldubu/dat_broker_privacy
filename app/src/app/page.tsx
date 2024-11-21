import { PremiumFeatures } from '@/components/premium-features'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Protect Your Privacy</h1>
          <p className="text-xl text-gray-600 mb-8">
            Take control of your personal information and safeguard your online presence.
          </p>
          <Button size="lg" className="mr-4">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Premium Features</h2>
          <PremiumFeatures />
        </section>

        <section className="bg-blue-600 text-white rounded-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-semibold mb-4">Why Choose PrivacyGuard?</h2>
              <p className="text-lg mb-4">
                We offer comprehensive protection against data breaches and unauthorized information sharing.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Advanced scanning technology</li>
                <li>Automated removal processes</li>
                <li>24/7 monitoring and alerts</li>
                <li>Expert guidance for high-risk situations</li>
              </ul>
              <Button size="lg" variant="secondary">
                Start Your Free Trial
              </Button>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <Shield className="w-48 h-48" />
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Secure Your Data?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied users who trust PrivacyGuard to protect their personal information.
          </p>
          <Button size="lg">Sign Up Now</Button>
        </section>
      </main>
      <footer className="bg-gray-200 py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2024 PrivacyGuard. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


