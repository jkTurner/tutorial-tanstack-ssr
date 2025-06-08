'use client'
import { fetchPosts } from "@/lib/api/posts";
import { useQuery } from "@tanstack/react-query";
 
const PostList = () => {
 
    const { data: posts, isLoading, isError, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    })
 
    if (isLoading) return <p>Loading Posts...</p>
    if (isError) return <p>Error: {(error as Error).message}</p>
 
    return (
        <ul>
            {posts?.map((post) => (
                <li 
                    key={post.id}
                    className="w-full p-[16px]"
                    >
                        <h2 className="font-semibold">{post.title}</h2>
                        <p>{post.body}</p>
                </li>
            ))}
        </ul>
    )
}
 
export default PostList;