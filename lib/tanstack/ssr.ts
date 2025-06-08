import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchPosts } from "../api/posts";
 
export async function getDehydratedPostsState() {
 
    const queryClient = new QueryClient();
 
    await queryClient.prefetchQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    })
 
    return {
        dehydratedState: dehydrate(queryClient),
        queryClient,
    }
}