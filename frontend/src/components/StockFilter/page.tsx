import { SearchOutlined } from "@ant-design/icons";


export const StockFilter = () => {
    return (
        <div>
            <div className="bg-[#F2F1F1] flex itens-center justify-between border-2 rounded-md py-2 px-4 ml-[200px] mt-[15px]  w-[400px] border-[#BBB] hover:border-[#34b3e2] ">
                <div className=""><input type="text" className="bg-[#F2F1F1] outline-none w-[340px] "  /> </div>
                <div className="cursor-pointer "><SearchOutlined style={{fontSize: 20,}} /></div>

            </div>
        </div>
    )
}

export default StockFilter;