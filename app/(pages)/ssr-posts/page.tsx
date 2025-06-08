import PostList from "@/app/components/PostList"
import { getDehydratedPostsState } from "@/lib/tanstack/ssr"
import { HydrationBoundary } from "@tanstack/react-query"
 
export default async function SsrPostsPage() {
 
    const { dehydratedState } = await getDehydratedPostsState()
 
    return (
        <HydrationBoundary state={dehydratedState}>
            <main className="p-[16px] w-full">
                <h1 className="font-bold text-xl">Server Rendered Posts</h1>
                <PostList />
            </main>
        </HydrationBoundary>    
    )
}