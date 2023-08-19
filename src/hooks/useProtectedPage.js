import { useNavigate } from "react-router-dom"



export const useProtectedpage = () => {
const navigate = useNavigate()

const token = localStorage.getItem('token') 
console.log(token)
}