import { useEffect, useState } from "react"

import { blogs } from "./useblogs"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const useBlog = ({ id } : { id : string }) => {
    const [loading,setLoading] = useState(true)
    const [blog,setBlog] = useState<blogs>()

    useEffect(() => {
        // const token = localStorage.getItem('token')
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`)
            .then((response) => {
                setBlog(response.data.blog)
                setLoading(false)
            })
    },[id])

    return {
        loading,
        blog
    }
}