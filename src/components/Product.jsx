import { useDispatch, useSelector } from "react-redux";
import { toast} from "react-hot-toast";
import { add } from "../redux/Slices/CartSlice";
import { remove } from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed to Cart");
  }


  return (
    <div className="flex flex-col items-center justify-between hover:scale-110
    transition duration-300 ease-in gap-3 p-4 mt-5 rounded-xl outline">

      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>

      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"></img>
      </div>

      <div className="flex justify-between gap-12">

      <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>

      {
        cart.some((p) => p.id == post.id) ?
        (<button
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
        text-[12px] p-1 px-3 upppercase
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in"
        onClick={removeFromCart}>
        Remove Item
        </button>) :
        (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[12px] p-1 px-3 upppercase
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
        onClick={addToCart}>
         Add to Cart
        </button>)
      }

      </div>

      
    </div>
  )
}


export default Product;





































// import { toast } from "react-hot-toast";
// import { add, remove } from "../redux/Slices/cartSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Product = ({ product }) => {
//   const { cart } = useSelector((state) => state);
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(add(product));
//     toast.success("Item Added To Cart");
//   };

//   const removeFromCart = () => {
//     dispatch(remove(product.id));
//     toast.error("Item Removed From Cart");
//   };

//   return (
//     <div className="flex flex-col items-center justify-between bg-white hover:scale-110 transition-all duration-300  ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] ">
//       <div>
//         <h1 className="text-gray-700 font-semibold text-lg text-left truncate mt-1 w-40">
//           {product.title}
//         </h1>
//       </div>
//       <div>
//         <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
//           {product.description.split(" ").slice(0, 10).join(" ") + "..."}
//         </p>
//       </div>
//       <div className="h-[180px]">
//         <img
//           src={product.image}
//           alt="Product Image"
//           className="h-full w-full"
//         />
//       </div>
//       <div className="flex justify-between items-center w-full mt-5">
//         <p className="text-green-600 font-semibold">${product.price}</p>
//         {cart.some((p) => p.id == product.id) ? (
//           <button
//             className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
//             onClick={removeFromCart}
//           >
//             Remove Item
//           </button>
//         ) : (
//           <button
//             className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
//             onClick={addToCart}
//           >
//             Add to Cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Product;
