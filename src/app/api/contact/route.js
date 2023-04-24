import conn from "@/utils/conn";

import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await conn();
    await Contact.create(body);
    return NextResponse.json(
      {
        message: "Send Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        error: "Some error",
      },
      { status: 504 }
    );
  }
}
