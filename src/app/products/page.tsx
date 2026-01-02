import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/services.products";
import Footer from "@/components/Footer";
import NavbarShell from "@/components/NavbarShell";

const Page = async () => {
    const products = await getProducts();
    
    return (
    
    <div className="w-full min-h-screen font-sans">
        <section>
            <div className="mx-auto max-w-8xl -my-7 mb-0.5">
                <NavbarShell />
            </div>
        </section>

        <section className="bg-green-100 py-20">
                <div className="flex flex-col items-center justify-center font-sans w-full max-w-7xl mx-auto">
                <h1 className="font-bold text-4xl">DISCOVER OUR MATCHA SELECTION</h1>
                <p className="mt-2 text-gray-700 text-xl"></p>
            
                <div className="grid grid-cols-3 mt-10 gap-15">
                    {products.map((product) => (
                        <div key={product.id}>
                            <ProductCard product={product} />
                        </div> 
                    ))}
                </div>
            </div>
        </section>

        <section>
            <Footer />
        </section>
    </div>
  )
}

export default Page
