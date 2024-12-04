// import { useState } from "react";
// import ReactPaginate from "react-paginate";

// interface PaginatedItems {
//   itemsPerPage: number;
//   items: any;
// }

// function PaginatedItems({ itemsPerPage, items }: PaginatedItems) {
//   const [itemOffset, setItemOffset] = useState(0);
//   const endOffset = itemOffset + itemsPerPage;

//   const currentItems = items.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(items.length / itemsPerPage);

//   const handlePageClick = (event: { selected: number }) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <ReactPaginate
//       breakLabel="..."
//       nextLabel="next >"
//       onPageChange={handlePageClick}
//       pageRangeDisplayed={5}
//       pageCount={pageCount}
//       previousLabel="< previous"
//       renderOnZeroPageCount={null}
//     />
//   );
// }

// export default PaginatedItems;
