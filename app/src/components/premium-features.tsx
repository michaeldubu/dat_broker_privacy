import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Shield, Radar, FileWarning, Bell, Lock } from 'lucide-react'

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Monthly Data Broker Scan",
    description: "Scan 190 data broker sites that may be selling your personal info."
  },
  {
    icon: Radar,
    title: "Automatic Data Removal",
    description: "Automatically remove your data from sites that are selling your personal info."
  },
  {
    icon: FileWarning,
    title: "High Risk Data Breach Guidance",
    description: "Guided experience through high risk data breaches that require manual steps."
  },
  {
    icon: Bell,
    title: "Continuous Monitoring",
    description: "Continuous monitoring for new exposures to keep your data safe."
  },
  {
    icon: Lock,
    title: "Data Breach Alerts",
    description: "Receive alerts when your data has been breached."
  }
]

export function PremiumFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index}>
          <CardHeader>
            <feature.icon className="w-10 h-10 mb-4 text-primary" />
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

