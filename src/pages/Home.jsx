import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { allProducts, loading, errorMsg } = useSelector(
    (state) => state.productReducer
  );
  // console.log(allProducts, loading, errorMsg);
  // pagination
  const [currentPage,setCurrentPage]=useState(1)
  const productsPerPage=8
  const totalpages=Math.ceil(allProducts?.length/productsPerPage)
  const currenPageProductLastIndex=currentPage*productsPerPage
  const currentPageProductFirstIndex=currenPageProductLastIndex-productsPerPage
  const visibleAllProducts=allProducts?.slice(currentPageProductFirstIndex,currenPageProductLastIndex)

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const navigateToNextPage=()=>{
    if(currentPage!=totalpages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToPrevPage=()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }
  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: "100px" }} className="continer px-4 mx-auto">
        {loading ? 
          <div className="flex justify-center items-center my-5 text-3xl">
            <img
              width={"200px"}
              height={"200px"}
              src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
              alt=""
            />
            Loading...
          </div>
         : 
          <>
            <div className="grid grid-cols-4 gap-4">
              {
              allProducts.length > 0 ? 
               visibleAllProducts?.map(products=>(
                <div className="rounded border p-2 shadow">
                <img
                  width={"100%"} height={'200px'}
                  src={products?.thumbnail}
                  alt=""
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">{products?.title}</h3>
                  <Link
                    to={`/${products?.id}/view`}
                    className="bg-violet-600 rounded p-1 mt-3 text-white inline-block"
                  >
                  
                    View more..
                  </Link>
                </div>
              </div>
               ))
               : 
                <div className="flex justify-center items-center font-bold text-red-600 my-5 text-lg ">
                  Products not found
                </div>
              }
            </div>
            <div className="text-2xl text-center font-bold mt-20">
              <span onClick={navigateToPrevPage} className="cursor-pointer"><i className="fa-solid fa-backward me-5"></i></span>
              <span>{currentPage} of {totalpages}</span>
              <span onClick={navigateToNextPage} className="cursor-pointer"> <i className="fa-solid fa-forward ms-5"></i> </span>
            </div>
          </>
        }
      </div>
    </>
  );
};

export default Home;