import { NextResponse } from "next/server";
import dbConnection from "@/db/mongodb";
import Item from "@/models/item"

export async function POST(request) {
    try {
        const { title, desc } = await request.json();
        await dbConnection();
        const newItem = await Item.create({ title, desc });
    
        return NextResponse.json({ msg: "Item created successfully", newItem }, { status: 201 });
    } catch (error) {
        console.error("Error creating item:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await dbConnection();
        const items = await Item.find();
        return NextResponse.json({items});
    } catch (error) {
        console.error("Error showing items:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get('id');
        await dbConnection();
        await Item.findByIdAndDelete(id);
        return NextResponse.json({ msg: `Item with id ${id} deleted successfully` }, { status: 404 });
    } catch (error) {
        console.error("Error deleting item:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const id = request.nextUrl.searchParams.get('id');
        const {newTitle: title, newDesc: desc} = await request.json();
        await dbConnection();
        await Item.findByIdAndUpdate(id, {title, desc});
        return NextResponse.json({ msg: `Item with id ${id} updated successfully` }, { status: 200 });
    } catch (error) {
        console.error("Error updating item:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}