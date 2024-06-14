import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'

export default function Page() {
  return (
    <div className="flex flex-col">
      <ClerkLoaded>
        <SignUp path="/sign-up" />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-neutral-400" />
      </ClerkLoading>
    </div>
  )
}
