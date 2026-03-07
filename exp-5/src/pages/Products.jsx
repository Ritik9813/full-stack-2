import ProductCard from "../components/ProductCard";

const products = [

{
id:1,
name:"Laptop",
price:50000,
image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
},

{
id:2,
name:"Smartphone",
price:20000,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},

{
id:3,
name:"Headphones",
price:3000,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},





{
id:6,
name:"Tablet",
price:18000,
image:"https://images.unsplash.com/photo-1542751110-97427bbecf20"
},

{
id:7,
name:"Bluetooth Speaker",
price:2500,
image:"https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
},

{
id:8,
name:"Gaming Mouse",
price:1200,
image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
},

{
id:9,
name:"Mechanical Keyboard",
price:3500,
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
},

{
id:10,
name:"Monitor",
price:15000,
image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
},







{
id:14,
name:"VR Headset",
price:12000,
image:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620"
},


];
function Products() {

  return (
    <div className="page">

      <h2>Products</h2>

      <div className="grid">

        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}

      </div>

    </div>
  );
}

export default Products;