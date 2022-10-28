import React, { useContext } from 'react'
import './page.css';
import ReactPaginate from "react-paginate";
import { MainData } from '../context/Context';
export const Page = () => {
  const {pages,change__page} = useContext(MainData);



  function handlePageClick({selected}){
    change__page(selected);
  }   
  return (
    <div className='page'>
     <ReactPaginate
        breakLabel="..."
        nextLabel="N"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pages}
        previousLabel="P"
        renderOnZeroPageCount={null}
        containerClassName= "page-cont"
        pageClassName="page-ele"
        activeLinkClassName	= "active"
        pageLinkClassName = "page-link"
        nextClassName = "page-ele"
        previousClassName ="page-ele"
        previousLinkClassName ="page-link"
        nextLinkClassName = "page-link"
        breakClassName	= "break"
      />
    </div>
  )
}
