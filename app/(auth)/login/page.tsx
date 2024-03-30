import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import EmailLoginForm from '@/components/email-login-form';
import GithubLoginForm from "@/components/github-login-form";
import GoogleLoginForm from "@/components/google-login-form";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function Login() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen w-screen">
      <div className="relative max-w-[536px] w-full min-h-screen hidden lg:block">
        <Image
          src="/images/content/bg-connect.jpg"
          layout="fill"
          objectFit="cover"
          alt="Banner"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
      <Link href="/" className="absolute top-6 right-6">
  <div className="bg-black rounded-full p-2">
    <Icons.close className="h-6 w-6 text-white" id="close"/>
  </div>
</Link>
        <div className="w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access your account
          </h1>
          <p className="text-sm text-muted-foreground">

            Use your email, Google, or Github to get started. No password required.
          </p>
          <div>
            <EmailLoginForm />
            <hr />
            <GithubLoginForm />
            <GoogleLoginForm />
          </div>
        </div>
      </div>
    </div>
    </div >
  );
}
