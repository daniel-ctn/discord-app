import { redirect } from 'next/navigation'

import { db } from '@/lib/db'
import { initialProfile } from '@/lib/initial-profile'
import CreateServerModal from '@/components/modal/CreateServerModal'

export default async function Home() {
  const profile = await initialProfile()

  if (!profile) return (
    redirect('/sign-in')
  )

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  })

  if (server) return (
    redirect(`/servers${server.id}`)
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreateServerModal />
    </main>
  )
}
