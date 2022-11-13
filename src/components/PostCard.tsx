import { FC, useRef, useState } from 'react'
import { PostShape } from '../hooks/useGetPosts'

type Props = {
   post: PostShape
   handleDeleteClick: any
   handleUpdateClick: any
}

const PostCard: FC<Props> = ({
   post,
   handleDeleteClick,
   handleUpdateClick,
}) => {
   const [isEditing, setIsEditing] = useState(false)

   const titleRef = useRef<HTMLInputElement>(null)
   const contentRef = useRef<HTMLTextAreaElement>(null)

   function confirmClick() {
      const postData = {
         title: titleRef.current!.value,
         content: contentRef.current!.value,
      }
      handleUpdateClick(post.id, postData)
   }

   return (
      <div
         key={post.id}
         className='flex w-1/4 flex-col items-center justify-center gap-4 rounded-md bg-white p-8 text-black'
      >
         {isEditing ? (
            <>
               <input
                  className='w-full rounded-md bg-gray-100 px-4 py-2 text-center text-xl'
                  defaultValue={post.title}
                  ref={titleRef}
               />
               <textarea
                  className='h-full w-full rounded-md bg-gray-100 p-2'
                  defaultValue={post.content}
                  ref={contentRef}
               />
            </>
         ) : (
            <>
               <h2 className='text-xl'>{post.title}</h2>
               <p>{post.content}</p>
            </>
         )}
         <div className='flex w-full gap-2'>
            {isEditing ? (
               <button
                  onClick={() => {
                     setIsEditing(!isEditing)
                     confirmClick()
                  }}
                  className='w-1/2 cursor-pointer rounded-md bg-green-400 px-4 py-2 text-white'
               >
                  Confirm
               </button>
            ) : (
               <button
                  onClick={() => setIsEditing(!isEditing)}
                  className='w-1/2 cursor-pointer rounded-md bg-gray-400 px-4 py-2 text-white'
               >
                  Edit
               </button>
            )}

            <button
               onClick={() => handleDeleteClick(post.id)}
               className='w-1/2 cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white'
            >
               Delete
            </button>
         </div>
      </div>
   )
}
export default PostCard
