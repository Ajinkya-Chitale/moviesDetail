import React, { useContext } from 'react'
import Pagination from '@mui/material/Pagination'
import { AppContext } from '../Context/context'

const PaginationController = () => {
    const { totalResults, page, setPage } = useContext(AppContext);

    const handlePagination = (e, value) => {
        setPage(value);
    }

    return (
        <div className='paginationParent flex justify-center bg-slate-600'>
            <Pagination count={totalResults} page={page} onChange={handlePagination} />
        </div>
    )
}

export default PaginationController
