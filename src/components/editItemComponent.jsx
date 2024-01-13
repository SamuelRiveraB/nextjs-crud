"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const editItemComponent = ({id, title, desc}) => {
    const[newTitle, setNewTitle] = useState(title)
    const[newDesc, setNewDesc] = useState(desc)
    const router = useRouter()

    const handleUpdate = async (event) => {
        event.preventDefault();
        if(!newTitle) {
            alert("Title is required")
            return
        }
        if(!newDesc) {
            alert("Description is required")
            return
        }
        try {
            const response = await fetch(`http://localhost:3000/api/items/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({newTitle, newDesc})
            })
            if(response.ok) {
                router.push("/")
            } else {
                throw new Error("Error occurred while updating an item")
            }
        } catch (error) {
            console.log("Error occurred while updating an item: ", error)
        }
    }

    return (
        <div>
            <form className="flex flex-col mt-2 gap-3" onSubmit={handleUpdate}>
                <input className="border border-orange-500 px-7 py-2 rounded-lg text-gray-700" type="text" placeholder="Item title" onChange={(e)=> setNewTitle(e.target.value)} value={newTitle}/>
                <input className="border border-orange-500 px-7 py-2 rounded-lg text-gray-700" type="text" placeholder="Item description" onChange={(e)=> setNewDesc(e.target.value)} value={newDesc}/>
                <button className="bg-orange-500 font-bold text-white px-7 py-2 rounded-lg w-fit" type="submit">Update</button>
            </form>
        </div>
    );
}

export default editItemComponent;