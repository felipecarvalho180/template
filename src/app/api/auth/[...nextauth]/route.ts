import { sleep } from "@/utils/helpers/sleep";
import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
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

        try {
          await sleep(300);
          const data = "logged";

          if (!data) throw new Error("Invalid credentials");

          return data as unknown as User;
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async signIn(params) {
      const { user: token } = params;

      if (token) {
        cookies().set({
          name: "token",
          value: token,
          // @ts-ignore
          secure: true,
          httpOnly: true,
        });

        return Promise.resolve(true);
      }

      throw new Error("Invalid credentials");
    },
  },
  secret: "teste",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
