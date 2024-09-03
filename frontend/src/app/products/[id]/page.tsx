import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";


interface Props{
    params:{id:string}
}

async function ProductDetailPage({params}:Props) {
    const product=await getProduct(params.id)
    console.log(params);
    console.log(product);
    


    
  return (
    <div className=" flex justify-center items-center" >
        <Card>
            <CardHeader className="flex justify-between">
                <CardTitle>Product detail:{product.id}
                    <Link className={buttonVariants()} href="/">
                    Go back
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent>   
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <img className="w-full h-64 object-cover" src={product.image} />
            </CardContent>
        </Card>

    </div>
  )
}

export default ProductDetailPage