import Carpet from "../../../../models/carpet";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { userId, carpets } = await request.json();

  try {
    await connectToDB();
    const newCarpet = new Carpet({ userId: userId, carpet: carpets }) ;

    await newCarpet.save();
    return new Response(JSON.stringify(newCarpet), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Carpet", { status: 500 });
  }
};
