import React from "react"
import { Pagination } from "semantic-ui-react"

const Navigator = ({ postPerPage, totalPosts, paginate, currentPage }) => {
   return (
      <Pagination
         activePage={currentPage}
         totalPages={Math.ceil(totalPosts / postPerPage)}
         onPageChange={(e, pageInfo) => paginate(pageInfo.activePage)}
         ellipsisItem={null}
         siblingRange={3}
         boundaryRange={0}
      />
   )
}

export default Navigator
