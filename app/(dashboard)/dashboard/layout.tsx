import { notFound } from "next/navigation"
import Logo from "@/components/ui/Logo"
import Link from "next/link"
import Kbar from "@/components/kbar"

import { dashboardConfig } from "@/config/dashboard"
import { getCurrentUser } from "@/lib/session"
import { MainNav } from "@/components/main-nav"
import { DashboardNav } from "@/components/nav"
import { UserAvatar } from "@/components/user-avatar"
import { UserAccountNav2 } from "@/components/user-account-nav2"
import Profile from "@/components/profile"


import { ChatbotCreateButton } from "@/components/chatbot-create-button"
import { UpgradePlanButton } from "@/components/upgrade-plan-button"
 // Add useState import at the top of your file

interface DashboardLayoutProps {
    children?: React.ReactNode
}

export default async function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    const user = await getCurrentUser()

    if (!user) {
        return notFound()
    }

    return (
        <div className="flex min-h-screen flex-col space-y-6">
           
            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
            
                <aside className="hidden w-[200px] flex-col md:flex">
                <Link href="/" className="hidden items-center space-x-2 md:flex">
      <Logo width={200} height={50} />
      </Link>
                    <DashboardNav items={dashboardConfig.sidebarNav} />
                    <Profile
               user={{
                   name: user.name,
                   image: user.image,
                   email: user.email,
               }}
           />

                    
                </aside>
                <main className="flex w-full flex-1 flex-col overflow-hidden">
  <div className="top-bar flex justify-between items-center pr-4">
    <div className="flex items-center">
      <Kbar />
    </div>
    <div className="flex items-center">
      {/* Placeholder navigation items */}
      <a href="/link1" className="text-sm px-4 py-2 leading-none rounded text-color-primary hover:text-color-primary-hover focus:outline-none mr-4">
        Documentation
      </a>
      {/* UserAccountNav component */}

      <UserAccountNav2
        user={{
          name: user.name,
          image: user.image,
          email: user.email,
        }}
      />
      <ChatbotCreateButton className="ml-8" />
    </div>
  </div>
  <hr />
  {children}
</main>

            </div>
        </div>
    )
}
