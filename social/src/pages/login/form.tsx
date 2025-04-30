import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/redux/auth/thunk";
import { useAppDispatch } from "@/redux/hook";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const dispatch = useAppDispatch()

    const onSubmit = (data: unknown) => {
        const newData = data as { email: string, password: string }
        dispatch(login({ email: newData.email, password: newData.password }))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-3">
                <Label className="m-2">Email</Label>
                <Input {...register("email", { required: true })}/>
                {errors.email && <span>Email required</span>}
            </div>

            <div className="p-3">
                <Label className="m-2">Password</Label>
                <Input {...register("password", { required: true })}/>
                {errors.password && <span>Password required</span>}
            </div>

            <div className="p-3">
                <Button>Submit</Button>
            </div>
        </form>
    )
}

export default LoginForm;