import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";
export default function About() {
    return (
        <div className="container mx-auto px-16">
            <div className="py-10 flex justify-between">
            <Link className="text-white text-5xl "href="/"><BsArrowLeftCircle/></Link>
            <p className='kan text-4xl text-blue-800 font-bold'>SKILLS</p></div>
            <div className="mt-6">
                <p className="text-white text-[20px]"> Word </p>
                <div className="w-full bg-gray-200 rounded-full ">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[65%]"> 65%</div>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-white text-[20px]"> Powerpoint </p>
                <div className="w-full bg-gray-200 rounded-full ">
                    <div className="bg-orange-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%]"> 50%</div>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-white text-[20px]"> Excel </p>
                <div className="w-full bg-gray-200 rounded-full ">
                    <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[40%]"> 40%</div>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-white text-[20px]"> Visual Studio Code </p>
                <div className="w-full bg-gray-200 rounded-full ">
                    <div className="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[40%]"> 40%</div>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-white text-[20px]"> CSS Style Text </p>
                <div className="w-full bg-gray-200 rounded-full ">
                    <div className="bg-purple-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[40%]"> 40%</div>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-white text-[20px]"> Figma </p>
                <div className="w-full bg-gray-200 rounded-full ">
                    <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[65%]"> 65%</div>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-white text-[20px]"> Adobe XD </p>
                <div className="w-full bg-gray-200 rounded-full ">
                    <div className="bg-purple-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[60%]"> 60%</div>
                </div>
            </div>
            
        </div>
    )
}