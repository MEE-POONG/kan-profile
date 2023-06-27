import { Root } from "postcss";
import RootLayout from "./layout";


export default function expectation() {
    return (
        <RootLayout>
            <div className="container mx-auto py-24 text-center text-white text-xl w-96 mt-16">
                <div className="wrapper ">
                    <div className="banner-image">
                        <img className='w-[300px] rounded-xl mx-auto ' src="./NKM.jpg " />
                    </div>
                </div>
                <br /><p>ความคาดหวัง : หวังว่าจะได้วิธีการใช้โปรแกรมออกแบบต่างๆ หรือทักษะสกิลให้คล่องแคล่วมากขึ้น เพื่อนำไปใช้ในรูปแบบงานของตัวเอง</p>
            </div>

        </RootLayout>
    )
}