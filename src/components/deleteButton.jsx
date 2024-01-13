"use client"
import {HiOutlineTrash} from "react-icons/hi"
import { useRouter } from "next/navigation"

const deleteButton = ({id}) => {
    const router = useRouter()
    const deleteItem = async() => {
        const conf = confirm("Are you sure you want to delete this item?")
        if(conf) {
            const response = await fetch(`http://localhost:3000/api/items?id=${id}`, {
                method: "DELETE"
            });
            if(response.ok){
                router.refresh()
            }
        }
    }
    return (
        <button onClick={deleteItem} className="text-red-600">
            <HiOutlineTrash size={24} />
        </button>
    );
}

export default deleteButton;