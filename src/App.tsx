import { FC, useRef } from 'react'
import { createPost, deletePost } from './api/postsApi'
import { useGetPosts } from './hooks/useGetPosts'

const App: FC = () => {
   const { posts, setPosts, isLoading } = useGetPosts()
   console.log({ posts })

   const titleRef = useRef<HTMLInputElement>(null)
   const contentRef = useRef<HTMLTextAreaElement>(null)

   function handleClick() {
      const postData = {
         id: posts.length + 1,
         title: titleRef.current!.value,
         content: contentRef.current!.value,
      }
      setPosts([...posts, postData])
      createPost(postData)
   }

   function handleDeleteClick(postId: number) {
      const filteredPosts = posts.filter(post => post.id !== postId)
      setPosts(filteredPosts)
      deletePost(postId)
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
            onClick={handleClick}
         >
            Create note
         </button>
         <div className='flex flex-row gap-4'>
            {posts.map((post) => (
               <div
                  key={post.id}
                  onClick={() => handleDeleteClick(post.id)}
                  className='flex flex-col items-center rounded-md bg-white p-8 text-black'
               >
                  <h2 className='text-xl'>{post.title}</h2>
                  <p>{post.content}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default App
