import Carpet from "@/models/carpet";
import { connectToDB } from "@/utils/database";

export const GET = async (request,{params}) => {
  try {
    await connectToDB();

    const carpets = await Carpet.find({ userId: params.id }).populate("carpet")

    return new Response(JSON.stringify(carpets), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all user carpet", { status: 500 });
  }
};
