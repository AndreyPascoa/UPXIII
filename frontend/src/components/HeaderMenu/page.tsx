import { BellOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons"
import Link from "next/link";

const HeaderMenu = () => {
    return (
        <div className="max-w-[1200px]  m-auto mt-4 justify-between flex ">
            <div className="flex items-center cursor-pointer">
                <Link href='/'>
                <HomeOutlined style={{ color: "#34b3e2", fontSize: 32, }} />
                </Link>
                <span className="ml-2 text-[#34b3e2]">Home</span>
            </div>
            <div>
                <div >
                    <BellOutlined style={{marginRight:8, color: "#34b3e2", fontSize: 28,}} className="cursor-pointer" />
                    <UserOutlined style={{color: "#34b3e2", fontSize: 28,}} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu;
