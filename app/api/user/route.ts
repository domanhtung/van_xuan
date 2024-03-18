import clientPromise from "../../../lib/mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  console.log(req?.nextUrl?.searchParams?.get("tab"));
  try {
    const client = await clientPromise;
    const db = client.db("VanXuan");
    const movies = await db.collection("user").find({}).limit(10).toArray();
    return NextResponse.json(movies || {}, { status: 200 });
  } catch (e) {
    console.error(e);
  }
}
