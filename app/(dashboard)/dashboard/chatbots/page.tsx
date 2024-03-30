
import { redirect } from "next/navigation"

import SearchImage from "@/components/ui/SearchImage"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { ChatbotCreateButton } from "@/components/chatbot-create-button"
import { ChatbotItem } from "@/components/chatbot-item"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: `${siteConfig.name} - Chatbots`,
}

export default async function ChatbotsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const bots: any[] = await db.chatbot.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      openaiId: true,
      model: {
        select: {
          id: true,
          name: true,
        }
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Assistants" text="Create and manage your assistants.">
        
      </DashboardHeader>
      <div>
        {bots?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {bots.map((bot) => (
              <ChatbotItem key={bot.id} chatbot={bot} model={bot.model} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
          <div className="noresults">
          <SearchImage width={150} height={150} />
          </div>
            <h2 className="EmptyPlaceholder">No assistants created</h2>
            <p className="EmptyPlaceholder">
              You don&apos;t have any assistant yet. Start creating.
            </p>
            <ChatbotCreateButton />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell >
  )
}