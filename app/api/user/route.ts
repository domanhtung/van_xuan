// import clientPromise from "../../../lib/mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    // const client = await clientPromise;
    // const db = client.db("VanXuan");
    // const movies = await db.collection("user").find({}).limit(10).toArray();
    // return NextResponse.json(movies || {}, { status: 200 });
    return NextResponse.json({}, { status: 200 });
  } catch (e) {}
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    return NextResponse.json({}, { status: 200 });
  } catch (e) {}
}
