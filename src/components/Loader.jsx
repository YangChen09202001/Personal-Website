import { Html } from "@react-three/drei"

const Loader = () => {
  return (
    <Html>
        <div className="flex justify-center items-center">
            <div className=" w-20 h-20 border-2 border-opaciy-20 border-blue-300 border-blue-300 rounded-full animate-spin">

            </div>
        </div>
    </Html>
  )
}

export default Loader