import DropDown from "./DropDown"

const Navbar = () => {
  return (
    <div className='w-full p-4 mb-2 bg-red-200 border-b border-black shadow-xl'>
        <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold font-mono'>
                Remote
            </div>
            <div>
                <DropDown />
            </div>
        </div>
    </div>
  )
}

export default Navbar