import { request } from "@/server";
import { sleep } from "@/utils/helpers/sleep";
import NextAuth, { Account, NextAuthOptions, Profile } from "next-auth";
import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import { cookies } from "next/headers";

const mockApi = {
  id: "1",
  email: "Mock Email",
  name: "Mock Name",
  lastName: "Mock LastName",
  accessToken: "logged",
};

interface Params {
  user: {
    id: string;
    email: string;
    name: string;
    lastName: string;
    accessToken: string;
  };
  account: Account | null;
  profile?: Profile;
  email?: {
    verificationRequest?: boolean;
  };
  credentials?: Record<string, CredentialInput>;
}

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
          await sleep(1500);
          return mockApi;
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    // @ts-ignore
    async signIn(params: Params) {
      const {
        user: { accessToken },
      } = params;
      console.log(params);
      if (accessToken) {
        cookies().set({
          name: "token",
          value: accessToken,
          // @ts-ignore
          secure: true,
          httpOnly: true,
        });

        return Promise.resolve(true);
      }

      throw new Error("Invalid credentials");
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
