import Link from "next/link";
import Image from 'next/image';

import { User } from "next-auth"
import { UserAvatar } from "@/components/user-avatar"


type ProfileProps = {
    visible?: boolean;
    email?: string; // Add an email prop
    user: Pick<User, "name" | "image" | "email"> & { hasActiveSubscription?: boolean };
};

const Profile = ({ user, visible, email }: ProfileProps) => (
    <div
        className={`${visible ? "mb-6" : "mb-3 shadow-[0_1.25rem_1.5rem_0_rgba(0,0,0,0.5)]"}`}
    >
        <div className={`${!visible && "p-2.5 bg-n-6 rounded-xl"}`}>
            <div
                className={`flex items-center ${visible ? "justify-center" : "px-2.5 py-2.5 pb-4.5"}`}
            >
                <div className="relative w-10 h-10">
                <UserAvatar
                    user={{ name: user.name || null, image: user.image || null }}
                    className="h-8 w-8"
                />
                    <div className="absolute -right-0.75 -bottom-0.75 w-4.5 h-4.5 bg-primary-2 rounded-full border-4 border-n-6"></div>
                </div>
                {!visible && (
                    <>
                        <div className="ml-4 mr-4">
                            <div className="base2 font-semibold text-n-1">
                            {user.name && <p className="font-medium">{user.name}</p>}
                            </div>
                            <div className="caption1 font-semibold text-n-3/50">
                            {user.email && (
                            <p className="w-[200px] truncate text-sm text-muted-foreground">
                                {user.email}
                            </p>
                        )}
                            </div>
                        </div>
                        <div className="shrink-0 ml-auto self-start px-3 bg-primary-2 rounded-lg caption1 font-bold text-n-7">
                            Free
                        </div>
                    </>
                )}
            </div>
            {!visible && (
                <Link className="btn-stroke-dark w-full mt-2" href="/pricing">
                    Upgrade to Pro
                </Link>
            )}
        </div>
    </div>
);

export default Profile;