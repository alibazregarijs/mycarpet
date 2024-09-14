import Carpet from "../../../models/carpet";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const carpet = await Carpet.find({}).populate("carpet");

    return new Response(JSON.stringify(carpet), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all carpet", { status: 500 });
  }
};
