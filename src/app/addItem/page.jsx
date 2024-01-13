"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import dotenv from "dotenv";

dotenv.config()

const addItem = () => {
    const[title, setTitle] = useState("");
    const[desc, setDesc] = useState("");
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!title) {
            alert("Title is required")
            return
        }
        if(!desc) {
            alert("Description is required")
            return
        }
        try {
            const response = await fetch(`http://localhost:3000/api/items`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title, desc})
            })
            if(response.ok) {
                router.push("/")
            } else {
                throw new Error("Error occurred while creating a new item")
            }
        } catch (error) {
            console.log("Error occurred while creating a new item: ", error)
        }
    }

    return (
        <div>
            <form className="flex flex-col mt-2 gap-3" onSubmit={handleSubmit}>
                <input className="border border-orange-500 px-7 py-2 rounded-lg text-gray-700" type="text" placeholder="Item title" onChange={(event)=> setTitle(event.target.value)} value={title}/>
                <input className="border border-orange-500 px-7 py-2 rounded-lg text-gray-700" type="text" placeholder="Item description" onChange={(event)=> setDesc(event.target.value)} value={desc}/>
                <button className="bg-orange-500 font-bold text-white px-7 py-2 rounded-lg w-fit" type="submit">Add item</button>
            </form>
        </div>
    );
}

export default addItem;