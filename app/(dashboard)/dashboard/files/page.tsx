import { redirect } from "next/navigation"
import SearchImage from "@/components/ui/SearchImage"

import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { Label } from "@/components/ui/label"
import { CrawlerCreateButton } from "@/components/crawler-create-button"
import { FileUploadButton } from "@/components/file-upload-button"
import { FileItem } from "@/components/file-items"
import { siteConfig } from "@/config/site"

export const metadata = {
    title: `${siteConfig.name} - Files`,
}

export default async function FilePage() {
    const user = await getCurrentUser()

    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login")
    }

    const files = await db.file.findMany({
        select: {
            id: true,
            name: true,
            createdAt: true,
            openAIFileId: true,
            blobUrl: true,
            crawler: {
                select: {
                    id: true,
                    name: true,
                }
            }
        },
        where: {
            userId: user.id,
        },
    })

    const uploadedFiles = files.filter((file) => !file.crawler)

    const filesWithCrawler = files.filter((file) => {
        if (file.crawler) {
            return true
        }
        return false
    })


    return (
        <DashboardShell>
            <DashboardHeader heading="Files" text="List of all of your imported and crawled files.">
            </DashboardHeader>
            <div className="flex flex-col">
                <div className="mb-4 flex items-center justify-between px-2">
                    <Label className="text-lg">Uploaded files</Label>
                    <FileUploadButton variant={"outline"} />
                </div>
                {uploadedFiles.length ?
                    <div className="divide-y divide-border rounded-md border">
                        {uploadedFiles.map((file) => (
                            <FileItem key={file.id} file={file} />
                        ))
                        }
                    </div>
                    : <div className="grid gap-10">
                        <EmptyPlaceholder>
                        <SearchImage width={120} height={120} />
                            <h2 className="EmptyPlaceholder">Import a file now</h2>
                            <p className="EmptyPlaceholder">
                                You don&apos;t have any files yet. Import a file.
                            </p>
                            <FileUploadButton />
                        </EmptyPlaceholder>
                    </div>
                }
                <div className="my-4" />
                <div className="mb-4 flex items-center justify-between px-2">
                    <Label className="text-lg">Crawlers&apos; files</Label>
                    <CrawlerCreateButton variant={"outline"} />
                </div>
                {filesWithCrawler.length ?
                    <div className="divide-y divide-border rounded-md border">
                        {
                            filesWithCrawler.map((file) => (
                                <FileItem file={file} key={file.id} />
                            ))
                        }
                    </div>
                    :
                    <div className="grid gap-10">
                        <EmptyPlaceholder>
                        <SearchImage width={120} height={120} />
                        <h2 className="EmptyPlaceholder">Start crawling now to import files</h2>
                        <p className="EmptyPlaceholder">
                                You don&apos;t have any files yet. Start crawling.
                            </p>
                            <CrawlerCreateButton />
                        </EmptyPlaceholder>
                    </div>

                }
            </div>
        </DashboardShell>
    )
}