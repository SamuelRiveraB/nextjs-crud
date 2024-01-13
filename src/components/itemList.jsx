import Link from "next/link"
import DeleteButton from "./deleteButton"
import {HiPencilAlt} from "react-icons/hi"

const itemList = () => {
    return (
        <div className="p-4 border border-orange-500 my-2 flex justify-between items-start">
            <div>
                <h2 className="font-bold text-xl">Item Title</h2>
                <div>Item Description</div>
            </div>
            <div className="flex gap-2 my-auto">
                <DeleteButton />
                <Link href="/editItem/1">
                    <HiPencilAlt size={24} />
                </Link>
            </div>
        </div>
    );
}

export default itemList;