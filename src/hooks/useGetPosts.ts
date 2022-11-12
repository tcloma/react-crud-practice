import { useEffect, useState } from "react"
import { getPosts } from "../api/postsApi"

export interface PostShape {
   id: number,
   title: string,
   content: string
}

export const useGetPosts = () => {
   const [posts, setPosts] = useState<PostShape[]>([])
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      const fetchData = async () => {
         const response = await getPosts()
         setPosts(response)
         setIsLoading(false)
      }
      fetchData()
   }, [])

   return { posts, setPosts, isLoading }
}