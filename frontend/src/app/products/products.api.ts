export async function getProducts(){
    const data=await fetch('http://localhost:4000/api/products', {
        'cache': 'no-store'
    })
    
    console.log(data);
    return await data.json();
}

export async function getProduct(id:string){
    const data=await fetch('http://localhost:4000/api/products/'+id, {
        'cache': 'no-store'
    })
    
    console.log(data);
    return await data.json();
}

export async function createProduct(productData:any){

    const res=await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'cache': 'no-store'
        },
        body: JSON.stringify(productData)
    })
    const data = await res.json();
    console.log(data);
    
}


export async function deleteProduct(id:any){
    const res=await fetch(`http://localhost:4000/api/products/${id}`, { 
        method: 'DELETE',
      
    })     
    
    return await res.json();
}

export async function updateProduct(id:any, productData:any){
    const res=await fetch(`http://localhost:4000/api/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'cache': 'no-store'
        },
        body: JSON.stringify(productData)
    })
    const data = await res.json();
    console.log(data);
        
}