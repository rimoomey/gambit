import { toast } from "react-toastify"

export default function DetailsButton() {
  const displayDetails = () => {
    toast("Detail Toast", {
      position: "top-center",
      theme: "dark"
    })
  }
  return (
    <button onClick={displayDetails}>Details</button>
  )
}