import Sell from "@/models/Sell";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { sell } = await request.json();

  try {
    await connectToDB();
    const newSell = new Sell({ sell: sell });

    await newSell.save();
    return new Response(JSON.stringify(newSell), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Sell", { status: 500 });
  }
};
