import Image from "next/image"

type CardProps = {
  name: string
  desc: string
  price: string
  image: string
}

const Card = ({ name, desc, price, image }: CardProps) => {
  return (
    <div className="w-80 h-110 bg-white shadow-md rounded-2xl border-2 flex flex-col">
    
        <div className="bg-green-500 w-full h-3/5 rounded-t-2xl">
            <Image src={image} width={250} height={250} alt="menu item" className="ml-8" />
        </div>

        <div className="mt-3 px-4">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm mt-1">{desc}</p>
        </div>

        <div className="flex items-center justify-between mt-auto ml-4 mb-4 font-archivo text-3xl">
            <p>{price}</p>
        </div>

    </div>
  )
}

export default Card
