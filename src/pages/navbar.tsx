import Link from 'next/link'
import Skills from './skills';
export default function Navbar() {
    return (
        <div className='p-4 bg-slate-500 flex justify-between flex-wrap mx-auto items-center w-screen '>
            <Link href="/">
                <img className="w-10 h-10" src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" />
            </Link>
            <div className='flex justify-between text-white text-xl'>
            <Link href="about">
                <p className='px-4 hover:underline'>ประวัติส่วนตัว</p>
            </Link>
            <Link href="/skills">
                <p className='px-4 hover:underline'>Skills</p>
            </Link>
            <Link href="expectation">
                <p className='px-4 hover:underline'>Expectation</p>
            </Link>
            </div>

        </div>
    )
}