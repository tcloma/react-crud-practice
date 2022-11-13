import { useEffect, useState } from "react"
import { getPosts } from "../api/postsApi"

export interface PostShape {
   id?: string,
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
         // setTimeout(() => {
         // }, 3000)
      }
      fetchData()
   }, [])

   return { posts, setPosts, isLoading }
}