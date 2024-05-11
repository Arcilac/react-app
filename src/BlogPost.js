import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { blogdata } from "./blogdata"
import { useAuth } from "./auth"

function BlogPost() {
    const navigate = useNavigate()
    const { slug } = useParams()

    const auth = useAuth()

    const blogpost = blogdata.find(post => post.slug === slug)

    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username 

    const returnToBlog = () => {
        navigate("/blog")
    }

    return (
        <>
        <h2>{blogpost.title}</h2>
        <p>{blogpost.content}</p>
        <p>{blogpost.author}</p>
        <button onClick={returnToBlog}>Return</button>

        {canDelete && (
            <button>Delete</button>
        )}
        
        </>
    )
}

export { BlogPost }