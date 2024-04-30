"use client"
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";


const Header = () => {
    const pathname = usePathname()

    return <div className={`w-full flex justify-between px-10 md:px-40 py-5`}>
        <h1 className={`text-primary text-lg md:text-2xl font-base flex items-center`}>
            <Link href={"/"}>ETS</Link>
        </h1>
        <div className={`flex items-center gap-x-3 md:gap-x-5`}>
            <Link className={`text-primary text-base border-black border-b-0 hover:border-b transition-all hidden md:block`} href={"/"}>Trang chủ</Link>
            <Button variant={`outline`}>
                <Link className={`text-primary text-sm md:text-base`} href={`${pathname.includes("login") ? "/signup" : "/login"}`}>{pathname.includes("signup") ? "Đăng nhập" : "Đăng ký"}</Link>
            </Button>
            <Button variant={`default`} className={`${pathname.includes("login/student") || pathname.includes("login/teacher")  ? "block" : "hidden"}`}>
                <Link className={`text-secondary text-sm md:text-base`} href={`${pathname.includes("student") ? "teacher" : "student"}`}>{pathname.includes("student") ? "Tôi là giáo viên" : "Tôi là học sinh"}</Link>
            </Button>
        </div>
    </div>
}

export default Header;