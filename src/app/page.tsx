'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-full max-w-4xl p-4">
        <h1 className="text-2xl font-bold mb-4">AI Dev Assistant</h1>
        <Button>Get Started</Button>
      </Card>
    </main>
  )
}