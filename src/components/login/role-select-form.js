"use client"
import {Card} from "@/components/ui/card";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import Link from "next/link";

const RoleSelectForm = ({className}) => {
    const form = useForm({
        defaultValues: {
            role: "teacher"
        }
    })
    return <div className={`${className} mx-auto flex items-center p-5 transition-all duration-500`}><Card className={`${className} mx-auto p-5 transition-all duration-500`}>
        <h1 className={`text-primary text-2xl font-bold text-start pb-5`}>Chào mừng bạn đến với Câu lạc bộ Toán ánh sáng</h1>
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(data => {
                    if(data.role === "teacher") {
                        window.location.href = "/login/teacher"
                    } else {
                        window.location.href = "/login/student"
                    }
                })}
                className="w-full space-y-6 transition-all duration-500">
                <FormField
                    control={form.control}
                    name="role"
                    render={({field}) => (<FormItem>
                            <FormLabel>Chọn vai trò của bạn</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Tôi là giáo viên"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent {...form.register("role")}>
                                    <SelectItem value="teacher">Tôi là giáo viên</SelectItem>
                                    <SelectItem value="student">Tôi là học sinh</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>)}
                />
                <Button variant={"default"} className={`w-full transition-all duration-500`} type="submit">Tiếp tục</Button>
            </form>
        </Form>
    </Card>
    </div>
}

export default RoleSelectForm;