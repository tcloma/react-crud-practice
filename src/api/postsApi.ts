import { PostShape } from '../hooks/useGetPosts'

const baseUrl = 'http://127.0.0.1:8090/api/collections/posts/records'

export const getPosts = async () => {
   const response = await fetch(baseUrl)
   return (await response.json()).items
}

export const createPost = async (postData: PostShape) => {
   const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
   })
   return response.json()
}

export const deletePost = async (postId: string) => {
   const response = await fetch(`${baseUrl}/${postId}`, { method: 'DELETE' })
   return response.json()
}

export const updatePost = async (postId: string, postData: PostShape) => {
   const response = await fetch(`${baseUrl}/${postId}`, {
      method: 'PATCH',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
   })
   return response.json()
}
