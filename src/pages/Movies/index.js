import React, { useState } from 'react';
import CommonLayout from '../../components/Layout/layout';
import CenteredContainer from '../../components/Container';
import MovieCard from '../../components/Movie';
import { SampleData } from './demodata';
import Pagination from '../../components/Pagination';
import './styles.css'
import { useNavigate } from "react-router-dom";

function MoviesList() {
    const navigate = useNavigate();
     const itemsPerPage = 4; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = SampleData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(SampleData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    };
    
    const logoutHandle = () => {
        navigate('/')
    }

    return (
        <CommonLayout>
            <CenteredContainer>
                <div className='header-div'>
                    <div className='header-title' >
                        <h2 className='headerTitleLeft'>{`My movies`}</h2>
                    </div>
                    <div className='header-subtile' onClick={logoutHandle}>
                        <h1 className='headerSubTitleLeft'>{`Logout`}</h1>
                    </div>
                </div>
                <div className='movies-grid'>
                    {currentItems.map((item, index) => {
                        return <MovieCard key={index} item={item} />;
                    })}
                </div>
               
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </CenteredContainer>
        </CommonLayout>
    )
}

export default MoviesList;