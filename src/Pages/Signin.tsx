import { Button } from '@/Components/ui/button'
import { Checkbox } from '@/Components/ui/checkbox'
import { Input } from '@/Components/ui/input'
import { Label } from '@radix-ui/react-label'

const Signin = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className='flex p-3 bg-white w-168 h-120 transform hover:scale-105 duration-500 -translate-y-10 shadow-lg rounded-lg'>
        <section className='flex flex-col w-84'>
          <div className=''>
          <h1 className='font-bold text-3xl text-center uppercase '>Login</h1>
          </div>
        <div className='mt-4 p-4'>
          <Label className='text-sm'>Email</Label>
          <Input placeholder='Email' className='' />
          

          <Label className='text-sm'>Password</Label>
          <Input placeholder='Password' className='' />

          <div className='space-x-2'>
          <Checkbox id='terms' />
          <Label htmlFor='terms' className='text-sm'> Accept terms and conditions</Label>
          </div>
          <div className='flex justify-center mt-6'>
          <Button className='cursor-pointer bg-blue-500 px-4 py-2'>Login</Button>
          </div>
          <div className='flex items-center justify-center mt-4'>
          <div className='w-30 border-t border-gray-300'></div>
            <span className='px-4 font-bold text-gray-500'>OR</span>
          <div className='w-30 border-t border-gray-300'></div>
          </div>
          <div className='px-6'>
          <div className='flex flex-col mt-4 space-y-2'>
            <button className='bg-red-400 rounded-full py-1 cursor-pointer'>Login with Google</button>
            <button className='bg-blue-400 rounded-full py-1 cursor-pointer'>Login with Facebook</button>
          </div>
          </div>
          
        </div>

        </section>

        <section className='bg-blue-300 w-84'>
          Right
        </section>
      </div>
      
    </div>
  )
}

export default Signin
