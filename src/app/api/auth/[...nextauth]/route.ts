import { request } from "@/api";
import { encryptToken } from "@/service/cyptojs";
import { AES, enc } from "crypto-js";
import NextAuth, { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const { data } = await request.post("/me", {
          email: credentials.email,
          password: credentials.password,
        });

        const token = encryptToken(data);

        cookies().set({
          name: "token",
          value: token,
          // @ts-ignore
          secure: true,
          httpOnly: true,
        });

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
