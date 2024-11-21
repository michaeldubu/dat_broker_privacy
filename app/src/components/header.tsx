import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">PrivacyGuard</h1>
        <nav>
          <Button variant="secondary">Sign In</Button>
        </nav>
      </div>
    </header>
  )
}

