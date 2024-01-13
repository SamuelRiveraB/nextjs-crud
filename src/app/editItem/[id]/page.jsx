import EditItemComponent from '@/components/editItemComponent'
import { useRouter } from "next/navigation";
import dotenv from "dotenv";

dotenv.config()

const fetchItem = async (id) => {
    try {
        const response = await fetch(`${process.env.API_URL}/api/items/${id}`, {cache: "no-store"});
        if(!response.ok) {
            throw new Error("Error occurred while fetching item")
        }
        return response.json();
    } catch (error) {
        console.log("Error while fetching item: ", error);
    }
}

const editItem = async ({params}) => {
    const {id} = params;
    const {item} = await fetchItem(id)
    const {title, desc} = item

    return (
        <EditItemComponent id={id} title={title} desc={desc} />
    );
}

export default editItem;