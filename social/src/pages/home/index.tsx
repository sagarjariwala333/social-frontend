import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { logout } from '../../redux/auth/slice'
import UploadPost from "@/components/post/Upload"
import { useEffect } from "react"
import { getPosts } from "@/redux/post/thunk"
import Timeline from "@/components/timeline"
import { Link } from "react-router-dom"

const HomePage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const post = useAppSelector(state => state.Post)

    console.log(post)

    return (
        <>
        <Link to='/image'>Images</Link>
        <Button className="m-3" onClick={() => dispatch(logout())}>Logout</Button>
        <UploadPost />
        <div className="m-3">
            <Timeline posts={post.data} />
        </div>
        </>
    )
}

export default HomePage