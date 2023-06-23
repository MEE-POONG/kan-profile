import Image from 'next/image'
import Tophome from '../../container/tophome';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import Link from 'next/link'

export default function Home() {
  return (
    <div className=' container mx-auto px-16'>
      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-3 ...">
        <div >
          <div className='p-10'>
            <img className=' w-[250px] border-4 border-sky-400 rounded-xl' src="https://scontent.fnak3-1.fna.fbcdn.net/v/t39.30808-6/346461390_757186696055371_6503476952280876085_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE2vVCwI5PtWbBUzqU-oeumAahjsafg6YgBqGOxp-DpiP3B9bHP4Dn3BGMHrgeYTTSV9nueHjPMuQmEtDrD0RTz&_nc_ohc=HJQ5VF4LYmcAX90o8mD&_nc_ht=scontent.fnak3-1.fna&oh=00_AfB133XcCLXuruGuC8MUhWOp1MSoC8JJ-3JTbOXtL-npYw&oe=64989FBF"/>
            <p className='kan text-5xl text-blue-800 '>PORTFOLIO</p>
            <div className='flex items-center mt-10 text-4xl text-blue-400 ' >
              <a className="flex items-center" href="https://www.facebook.com/profile.php?id=100017024203422"><BsFacebook /><span className='ml-4 text-[18px]'>กาน'นน</span></a>
            </div>
            <div className='flex items-center mt-10 text-4xl text-blue-400 ' >
              <a className="flex items-center" href="https://www.instagram.com/mith.kan/"><BsInstagram /><p className='ml-4 text-[18px]'>mith.kan</p></a>
            </div>
            <div className='flex items-center mt-10 text-4xl text-blue-400 ' >
              <VscAccount /><p className='ml-4 text-[18px]'>088-5816778</p>
            </div>
            <div className='flex items-center mt-10 text-4xl text-blue-400 ' >
              <CgMail /><p className='ml-4 text-[18px] break-words'>kangot357702@gmail.com</p>
            </div>
            <Tophome />
          </div>

        </div>
        <div className="col-span-2">
        <div className='p-10 text-white'>
          <h2 className='text-center text-4xl'>ประวัติส่วนตัว</h2>
          <div className='mt-10 text-2xl'>
            <p>นายอภิสิทธิ์ ศิริอมรวิวัฒน์</p>
            <p>ชื่อเล่น : กานต์</p>
            <p>เกิดวันที่ 4 เมษายน พ.ศ.2544 ปัจจุบันอายุ 22 ปี</p>
            <p>เลือดกรุ๊ป : บี เชื้อชาติ : ไทย สัญชาติ : ไทย</p>
            <p>บ้านเลขที่ 3หมู่ 15 ต.หนองหัวแรต อ.หนองบุญมาก จ.นครราชสีมา รหัสไปรษณีย์ 30410</p>
            <p>สถานศึกษา : มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน คณะบริหารธุรกิจ สาขาสารสนเทศและนวัตกรรมธุรกิจดิจิทัล</p>
            <p>งานอดิเรก : ดูหนัง ฟังเพลง และฟังข่าวกีฬาทั่วไป</p>
            <p>สีที่ชอบ : สีฟ้า</p>
            <p>กีฬาที่ชอบ : ฟุตบอล ปิงปอง แบดมินตัน</p>
            <p>ผลงานด้านการแข่งขัน : ได้ที่ 1 ของการแข่งขันROVที่มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน, ได้ที่ 2 ของรายการแข่งขันROVที่มหาวิทยาลัยราชภัฏนครราชสีมา</p>
            <p>ความคาดหวัง : คาดหวังว่าจะได้วิธีการออกแบบ ทักษะการใช้สกิลหรือการใช้โปรแกรมออกแบบให้คล่องแคล่ว</p>
          </div>
        </div>
        </div>
      <div>
        <div className='mt-10'>
        <Link href="/about">
        <h2 className='kan text-center text-4xl text-blue-800 font-bold '>SKILLS</h2>
        </Link>
        </div>
        <img className='h-[180px] mt-24 ml-12 w-[250px] border-4 border-blue-800 rounded-xl' src="https://scontent.fnak3-1.fna.fbcdn.net/v/t39.30808-6/344085867_1036696560639859_5905682265916459038_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF1VfQCC8CcBLaHGhKRoja-yuVj2cN52HXK5WPZw3nYdfQmzWjYCY7MHcPltpZzv4BXa6qHGiynobYARkNkxEMt&_nc_ohc=SUHZDBgo4OIAX8xVc4t&_nc_ht=scontent.fnak3-1.fna&oh=00_AfCYEoivFvO4mYbTV6KSYda91hI5G2PJ0n57lfiP3cW39w&oe=6498766A"></img>
        <img className='h-[180px] mt-24 ml-12 w-[250px] border-4 border-blue-800 rounded-xl' src="https://scontent.fnak3-1.fna.fbcdn.net/v/t1.15752-9/355670989_204089208830345_4373950646408499269_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE43-WQ69_Djb0A29JeIhdgyo3Cea_3ewXKjcJ5r_d7BfWNYs9zH_Ctc8MZDhctj03QCN88k9SisbbpOahcntPE&_nc_ohc=b1nXvGCQ7OAAX-zBz1J&_nc_ht=scontent.fnak3-1.fna&oh=03_AdSFA2b3sctP_YKWsk5LjcmGpwciSDv4bRnIX1qS3Mctpw&oe=64BB9FC6"></img>
      </div>
      </div>
    </div>
  )
}
