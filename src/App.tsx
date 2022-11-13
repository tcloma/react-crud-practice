import { FC, useRef } from 'react'
import { createPost, deletePost, updatePost } from './api/postsApi'
import { PostShape, useGetPosts } from './hooks/useGetPosts'
import PostCard from './components/PostCard'

const App: FC = () => {
   const { posts, setPosts, isLoading } = useGetPosts()
   console.log({ posts })

   const titleRef = useRef<HTMLInputElement>(null)
   const contentRef = useRef<HTMLTextAreaElement>(null)

   function handleCreateClick() {
      const postData = {
         title: titleRef.current!.value,
         content: contentRef.current!.value,
      }
      setPosts([...posts, postData])
      createPost(postData)
   }

   function handleDeleteClick(postId: string) {
      const filteredPosts = posts.filter((post) => post.id !== postId)
      setPosts(filteredPosts)
      deletePost(postId)
   }

   function handleUpdateClick(postId: string, postData: PostShape) {
      const filteredPosts = posts.map((post) => {
         if (post.id === postId) {
            return postData
         } else return post
      })
      setPosts(filteredPosts)
      updatePost(postId, postData)
   }

   return (
      <div className='flex min-h-screen flex-col items-center justify-center gap-2 bg-zinc-800 text-white'>
         <input
            className='w-1/3 rounded-md p-4 text-black'
            placeholder='Title'
            ref={titleRef}
         />
         <textarea
            className='w-1/3 rounded-md p-4 text-black'
            placeholder='Content'
            ref={contentRef}
         />
         <button
            className='w-1/3 rounded-md bg-zinc-900 px-8 py-4'
            onClick={handleCreateClick}
         >
            Create note
         </button>
         {isLoading ? (
            <h3>Loading...</h3>
         ) : (
            <div className='flex flex-row justify-center gap-4'>
               {posts.map((post) => (
                  <PostCard
                     post={post}
                     handleDeleteClick={handleDeleteClick}
                     handleUpdateClick={handleUpdateClick}
                  />
               ))}
            </div>
         )}
      </div>
   )
}

export default App
