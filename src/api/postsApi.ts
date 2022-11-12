import { PostShape } from "../hooks/useGetPosts"

const baseUrl = 'http://localhost:5000/posts'

export const getPosts = async () => {
   const response = await fetch(baseUrl)
   return response.json()
}

export const createPost = async (postData: PostShape) => {
   const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
   })
   return response.json()
}

export const deletePost = async (postId: number) => {
   const response = await fetch(`${baseUrl}/${postId}`, { method: 'DELETE' })
   return response.json()
}