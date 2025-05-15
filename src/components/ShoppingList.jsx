import React from "react";

const products = [
    { title: 'Cabbage', isFruit: false, imageUrl:'https://www.diagnosisdiet.com/assets/images/b/EAT-Lancet%20plant%20based%20planet%20on%20cabbage-b007e349.jpg', id: 1 },
    { title: 'Salad', isFruit: false, imageUrl:'https://www.diagnosisdiet.com/assets/images/1/brain%20on%20plants-f421a89a.jpg', id: 2 },
{ title: 'Apple', isFruit: true, imageUrl:'https://www.diagnosisdiet.com/assets/images/c/fruit-og-d176ef00.jpg', id: 3 },
  ];


export function ShoppingList() {
    const listItems= products.map(product =>
         <li style={{color: product.isFruit? 'magenta' : 'darkgreen'}} key={product.id} >
            <div className="card-inner">
            <img src={product.imageUrl} alt={product.title} width={200} height={200}  />
            <h2>{product.title}</h2>
            
            </div>
         </li>
    ) 

    return (
        <ul className="shopping-list">{listItems}</ul>
    )
}