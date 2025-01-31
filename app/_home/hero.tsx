import CreatePost from "../(crud)/create-post"
import { AllPosts } from "../(crud)/all-posts"

export const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-3xl">
            <CreatePost />
            <AllPosts />
        </div>
    )
}