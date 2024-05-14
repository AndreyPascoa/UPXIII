import { BellOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons"
import Link from "next/link";
import Archive from '@mdi/react';
import { mdiArchive } from '@mdi/js';

const HeaderStock = () => {
    return (
        <div className="w-[1000px]  m-auto mt-4 justify-between flex ">
            <div className="flex items-center cursor-pointer">
                <Link href='/stock'>
                <Archive path={mdiArchive} size={2} color={"#34b3e2"}  />
                </Link>
                <span className="ml-2 text-[#34b3e2]">Estoque</span>
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

export default HeaderStock;
