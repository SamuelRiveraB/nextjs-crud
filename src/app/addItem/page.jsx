const addItem = () => {
    return (
        <div>
            <form className="flex flex-col mt-2 gap-3" action="">
                <input className="border border-orange-500 px-7 py-2 rounded-lg" type="text" placeholder="Item title"/>
                <input className="border border-orange-500 px-7 py-2 rounded-lg" type="text" placeholder="Item description"/>
                <button className="bg-orange-500 font-bold text-white px-7 py-2 rounded-lg w-fit">Add item</button>
            </form>
        </div>
    );
}

export default addItem;