import { sleep } from "@/utils";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export type User = {
  user: {
    id: string;
    email: string;
    name: string;
    lastName: string;
    access_token: string;
  };
};

const mockApi = {
  id: "Mock Id",
  email: "mock@gmail.com",
  name: "Name",
  lastName: "LastName",
  img: "https://picsum.photos/40/40",
  access_token: "fake",
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize() {
        await sleep(300);
        const user = mockApi;

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      };
    },
    async session({ token, session }) {
      session.user = token;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
