import { IoIosSearch } from "react-icons/io";

function SearchComponent() {
    return (
        <div className="hidden lg:flex w-full border border-gray-400 h-9 rounded-3xl">
            <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="flex-1 rounded-3xl outline-none focus:no-underline px-5"/>
            <button className="px-3 text-gray-500">
                <IoIosSearch className="text-2xl"/>
            </button>
        </div>
    )
}

export default SearchComponent;
