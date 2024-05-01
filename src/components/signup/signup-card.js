"use client"
import {Card} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import Link from "next/link";
import {DatePicker} from "@/components/signup/date-picker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const SignupCard = () => {
    const form = useForm({
        defaultValues: {
            role: "",
            name: "",
            class: "",
            school: "",
            dob: "",
            gender: "",
            email: "m@example.com",
            password: "123456789"
    }})

    return <Card
        className={`col-span-12 md:col-span-6 lg:col-span-4 md:col-start-4 lg:col-start-5 mt-20 p-3 md:p-8 transition-all duration-500`}>
        <h1 className={`text-2xl font-bold mb-2`}>Đăng ký</h1>
        <form action="" onSubmit={form.handleSubmit(data => console.log(data))}>
            <div className={`mt-5 transition-all duration-500`}>
                <Label htmlFor="email">Vai trò của bạn</Label>
                <Select onValueChange={(data) => form.setValue("role", data)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Chọn một vai trò" />
                    </SelectTrigger>
                    <SelectContent >
                            <SelectItem value="teacher">Tôi là giáo viên</SelectItem>
                            <SelectItem value="student">Tôi là học sinh</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className={`mt-5 transition-all duration-500`}>
                <Label htmlFor="email">Họ và tên</Label>
                <Input type="name"
                       className={`w-full transition-all duration-500`}
                       placeholder={`Nguyễn Văn A`} {...form.register("name")} />
            </div>
            <div className={`grid grid-cols-2 gap-x-3`}>
                <div className={`mt-5 transition-all duration-500`}>
                    <Label htmlFor="text">Lớp</Label>
                    <Input type="text"
                           className={`w-full transition-all duration-500`}
                           placeholder={`12A1`} {...form.register("class")} />
                </div>
                <div className={`mt-5 transition-all duration-500`}>
                    <Label htmlFor="text">Trường</Label>
                    <Input type="text"
                           className={`w-full transition-all duration-500`}
                           placeholder={`THPT Chu Văn An`} {...form.register("school")} />
                </div>
                <div className={`mt-5 transition-all duration-500`}>
                    <Label htmlFor="text">Ngày sinh</Label>
                    <DatePicker form={form} className={`w-full transition-all duration-500`}/>
                </div>
                <div className={`mt-5 transition-all duration-500`}>
                    <Label htmlFor="text">Giới tính</Label>
                    <Input type="text"
                           className={`w-full transition-all duration-500`}
                           placeholder={`Nam`} {...form.register("gender")} />
                </div>
            </div>
            <div className={`mt-5 transition-all duration-500`}>
                <Label htmlFor="email">Tên đăng nhập</Label>
                <Input type="email" id={`email`}
                       className={`w-full transition-all duration-500`} {...form.register("email")} />
            </div>
            <div className={`mt-5`}>
                <Label htmlFor="password">Mật khẩu</Label>
                <Input type="password" id={`password`}
                       className={`w-full transition-all duration-500`} {...form.register("password")} />
            </div>
            <div className={`mt-5`}>
                <Button type={`submit`} className={`w-full transition-all duration-500`}>Đăng ký</Button>
            </div>
            <div className={`mt-5 text-center`}>
                <Label>Bạn đã có tài khoản?<Link href={"/login"} className={`pl-1 underline`}>Đăng nhập</Link></Label>
            </div>
        </form>
    </Card>
}

export default SignupCard