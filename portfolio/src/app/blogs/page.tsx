// import { title } from "process";
import BlogComponet from "../../../components/blogpage/blogs";



export const metadata={
  title:'Venky | Blogs'
}
export default function Blog(){
  return(
    <div className="md:mx-60 z min-h-screen">
      <BlogComponet/>
    </div>
  )
}
