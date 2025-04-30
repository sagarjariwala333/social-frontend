import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useAppDispatch } from "@/redux/hook"
import { uploadPost } from "@/redux/post/thunk"

const UploadPost = () => {

    const [postState, setPostState] = useState('')
    const dispatch = useAppDispatch()

    const handlePostUpload = () => {
        if (postState) {
            dispatch(uploadPost({ text: postState }))
        }
    }

    return (
        <div className="p-5">
            <Input placeholder="Upload Post" value={postState} onChange={(e) => setPostState(e.target.value)} />
            <Button onClick={handlePostUpload} className="mt-2">Post</Button>
        </div>
    )
}

export default UploadPost