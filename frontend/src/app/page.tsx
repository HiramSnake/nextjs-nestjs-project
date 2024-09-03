import Link from "next/link"
import {Button, buttonVariants} from '@/components/ui/button'
import { getProducts } from "./products/products.api"
import {ProductCard} from '../components/product-card'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export const dynamic = 'force-dynamic'

const page = async() => {

  

  const products = await getProducts()
  console.log(Object.values(products)) // products)
  
  return (
    <>
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold ">NextNestApp</h1>
      <Link className={buttonVariants()} href="/products/new">Create products</Link>
    </div>
        
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">


             {
               Object.values(products).map((product:any) => (
                <ProductCard key={product.id} product={product} />
              ))
            } 
            </div>

      
    </>
  )
}

export default page