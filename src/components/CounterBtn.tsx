import { Dispatch, FC, SetStateAction } from 'react'

type Props = {
   count: number
   setCount: Dispatch<SetStateAction<number>>
}

const CounterBtn: FC<Props> = ({ count, setCount }) => {
   return (
      <button
         className='rounded-md bg-zinc-900 p-4 text-lg font-semibold'
         onClick={() => setCount((count) => count + 1)}
      >
         count is {count}
      </button>
   )
}
export default CounterBtn
