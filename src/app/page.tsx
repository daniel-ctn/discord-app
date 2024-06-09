import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserButton/>
      <ModeToggle/>
    </main>
  )
}
