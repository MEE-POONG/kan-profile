import Image from 'next/image'
import Tophome from '../../container/tophome';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import Link from 'next/link'

export default function Home() {
  return (

    <div className="container my-20 text-center">
      <div className="wrapper">
        <div className="banner-image">
          <img className='w-[300px]  rounded-xl mx-auto' src="./NKN.jpg" />
        </div>
        <a className="mt-5 flex justify-center items-center text-sky-400"
          href="https://www.facebook.com/profile.php?id=100017024203422">
          <BsFacebook size={40} />
          <span className='ml-6 text-[24px] text-white'>
            กาน &apos; นน</span>
        </a>
        <a className="mt-5 flex justify-center items-center text-pink-300"
          href="https://www.instagram.com/mith.kan/"><BsInstagram size={40} />
          <p className='ml-6 text-[24px] text-white'>mith.kan</p>
        </a>
      </div>
      <div className="button-wrapper">
        <button className="btn fill">
          <a href="about">Click Me</a>
        </button>

      </div>
    </div>




  )
}
