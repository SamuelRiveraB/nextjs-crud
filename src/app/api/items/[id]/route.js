import { NextResponse } from "next/server";
import dbConnection from "@/db/mongodb";
import Item from "@/models/item"

export async function PUT(request, {params}) {
    try {
        const {id} = params
        const {newTitle: title, newDesc: desc} = await request.json();
        await dbConnection();
        await Item.findByIdAndUpdate(id, {title, desc});
        return NextResponse.json({ msg: `Item with id ${id} updated successfully` }, { status: 200 });
    } catch (error) {
        console.error("Error updating item:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(request, {params}) {
    try {
        const {id} = params
        await dbConnection();
        const item = await Item.findOne({_id: id});
        return NextResponse.json({item}, { status: 200 });
    } catch (error) {
        console.error("Error fetching item:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}