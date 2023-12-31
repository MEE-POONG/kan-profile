import RootLayout from "./layout"


export default function About(){

    return(
        <RootLayout>
          <div className='container p-5 text-white mx-auto mt-16 text-center'>
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
              <p>ผลงานด้านการแข่งขัน : ได้ที่ 1 ของการแข่งขันROVที่มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน,</p>
              <p>ได้ที่ 2 ของรายการแข่งขันROVที่มหาวิทยาลัยราชภัฏนครราชสีมา</p>
              
            </div>
          </div>
        </RootLayout>
    )
}
