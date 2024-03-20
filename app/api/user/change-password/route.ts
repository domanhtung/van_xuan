// import clientPromise from "../../../lib/mongodb";
import { NextResponse, NextRequest } from "next/server";
import clientPromise from "../../../../lib/mongodb";
import bcrypt from "bcrypt";

const validatePasword = (password: string) => {
  return password.match(
    // Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt
    //A password must be eight characters including one uppercase letter, one special character and alphanumeric characters
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  );
};

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // console.log(
    //   "----------------------------------------------------------------"
    // );
    // const body = await req.json();
    // if (!body?.email) {
    //   return NextResponse.json(
    //     { message: "email is required" },
    //     { status: 400 }
    //   );
    // }

    // if (!body?.password) {
    //   return NextResponse.json(
    //     { message: "password is required" },
    //     { status: 400 }
    //   );
    // }
    // if (!validatePasword(body?.password)) {
    //   return NextResponse.json(
    //     { message: "password is not valid" },
    //     { status: 400 }
    //   );
    // }
    // console.log("body: ", body, body?.email);
    // const client = await clientPromise;
    // const db = client.db(process?.env?.MONGODB_DATABASE);
    // const user = await db.collection("user").findOne({ email: body?.email });
    // const salt = await bcrypt.genSalt(10);
    // // user.password = await bcrypt.hash(body.password, salt)
    // // let user = new userModel(bodyRequest);
    // // const salt = await bcrypt.genSalt(10);
    // // user.password = await bcrypt.hash(user.password, salt);
    // // user.save((error, doc) => {
    // //     if(error) {
    // //         response.status(500).json({
    // //             status: "Error 500: Email đã được đăng ký",
    // //             message: error.message
    // //         })
    // //     } else {
    // //         response.status(201).send({
    // //             status: "Success 201: Đăng ký thành công",
    // //             doc: doc
    // //         })
    // //     }
    // // })
    // return NextResponse.json(user, { status: 200 });

    return NextResponse.json({}, { status: 200 });
  } catch (e) {}
}
