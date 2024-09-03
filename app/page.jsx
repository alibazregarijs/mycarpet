import { Inter } from "next/font/google";
import globals from "../styles/globals.css";
import background from "../public/assets/images/background.jpg";
import Image from "next/image";
import { Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "300", subsets: ["latin"] });

import { signIn, auth } from "./api/auth/auth";

export default async function SignIn() {
  const session = await auth();

  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>

      {/* {session?.user ? <h1>salam</h1> : <h1>by</h1>} */}
    </div>
  );
}
