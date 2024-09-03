"use client"
import { deleteProduct } from '@/app/products/products.api'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'
import { useRouter } from 'next/navigation'

 export const ProductCard = ({product}:any) => {

  const router=useRouter()

  async function handleRemoveProduct(id: any) {
    await deleteProduct(id)
    console.log(id)
    router.refresh()
  }
  return (
    <Card key={product.id} onClick={() => router.push(`/products/${product.id}`)} >
    <CardHeader>
      <CardTitle  className="flex justify-between">{product.name} 
        <span className="text-sm font-semibold text-gray-500">

        ${product.price}
        </span>
        </CardTitle>

        <img  src={product.image} />
      <CardContent>
        <p>

        {product.description}
        </p>
        </CardContent>
        <CardFooter className="flex justify-between">
        <Button className="mt-5"
         onClick={(e) => {
          e.stopPropagation()

           router.push(`/products/${product.id}/edit`)
          }
        }
          >Editar</Button>
        <Button onClick={(e) => {
          e.stopPropagation();
          handleRemoveProduct(product.id)}} className="mt-5" variant={"destructive"}>Eliminar</Button>

        </CardFooter>
    </CardHeader>
  </Card>
  )
}

