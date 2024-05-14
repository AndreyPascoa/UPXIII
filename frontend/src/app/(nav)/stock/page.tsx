import HeaderStock from "@/components/HeaderStock/page"
import SideBarNav from "@/components/SideBarNav/page"
import StockProduct, { StockFilter } from "@/components/StockFilter/page"

const page = () => {
  return (
    <div className='flex bg-[#F6F6F6] '>
      <div className="flex">
        <SideBarNav />
        <div className="ml-7">
          <div className="">
            <HeaderStock />
          </div>
          <div className="ml-5">
            <StockFilter/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page