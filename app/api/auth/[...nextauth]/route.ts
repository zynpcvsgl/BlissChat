import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import AuthOptions  from "../../../lib/auth";

import prisma from "@/app/libs/prismadb";

const handler = NextAuth(AuthOptions);



export { handler as GET, handler as POST };
