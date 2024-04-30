"use client"
import {Card, CardDescription} from "@/components/ui/card";
import {usePathname} from "next/navigation";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Link from "next/link";

const LoginCard = ({role}) => {
    const pathname = usePathname()
    role = pathname.includes("login/student") ? "student" : "teacher"

    const form = useForm({
        defaultValues: {
            role: role,
            email: "m@example.com",
            password: "123456789"
        }
    })

    return <Card
        className={`col-span-12 md:col-span-6 lg:col-span-4 md:col-start-4 lg:col-start-5 mt-20 p-3 md:p-8 transition-all duration-500`}>
        <h1 className={`text-2xl font-bold mb-2`}>Đăng nhập</h1>
        <CardDescription className={` transition-all duration-500`}>Bạn đang đăng nhập với vai trò
            là {role === "student" ? "học sinh" : "giáo viên"}</CardDescription>
        <form action="" onSubmit={form.handleSubmit(data => console.log(data))}>
            <div className={`mt-5 transition-all duration-500`}>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id={`email`}
                       className={`w-full transition-all duration-500`} {...form.register("email")} />
            </div>
            <div className={`mt-5`}>
                <Label htmlFor="password">Mật khẩu</Label>
                <Input type="password" id={`password`}
                       className={`w-full transition-all duration-500`} {...form.register("password")} />
            </div>
            <div className={`mt-5`}>
                <Button type={`submit`} className={`w-full transition-all duration-500`}>Đăng nhập</Button>
            </div>
            <div className={`text-center flex items-center justify-around py-2`}>
                <div className={`bg-gray-200 w-full h-0.5`}></div><div className={`px-2 text-gray-400`}>hoặc</div><div className={`bg-gray-200 w-full h-0.5`}></div>
            </div>
            <div className={``}>
                <Button variant={`outline`} className={`w-full transition-all duration-500`}>Đăng nhập với Google</Button>
            </div>
            <div className={`mt-5 text-center`}>
                <Label>Bạn chưa có tài khoản?<Link href={"/signup"} className={`pl-1 underline`}>Đăng ký</Link></Label>
            </div>
        </form>
    </Card>
}

export default LoginCard