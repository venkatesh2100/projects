import Navbar from "../components/navbar"
export * from "@prisma/client"

export default function Home() {
  return(
    <div>
      <Navbar/>
      <div className="pt-20 text-4xl">Home Page</div>
    </div>
  )
}