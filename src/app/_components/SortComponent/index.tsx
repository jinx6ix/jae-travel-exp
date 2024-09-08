import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 10px;
  width: 100%;
  min-width: 75vw;
  margin-bottom: 20px;
  
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SortLabel = styled.span`
  margin-right: 8px;
  font-weight: bold;
`;

const SortSelect = styled.select`
  padding: 7px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: black;
`;

const ViewContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ViewIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ccc;
  border-radius: 4px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ResultsCount = styled.span`
  font-size: 14px;
  color: #666;

  @media (max-width: 767px) {
    display: none;
  }
`;

const SortAndFilter = () => {
  const [sortOrder, setSortOrder] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [resultsCount, setResultsCount] = useState(31);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleViewChange = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  const startIndex = 7;
  const endIndex = 12;

  return (
    <Container>
      <SortContainer>
        <SortLabel>Sort by:</SortLabel>
        <SortSelect value={sortOrder} onChange={handleSortChange}>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </SortSelect>
      </SortContainer>
      <ViewContainer>
        <ViewIcon onClick={handleViewChange}>
          {viewMode === 'grid' ? '☐' : '☰'}
        </ViewIcon>
        <ResultsCount>
          Showing {startIndex}-{endIndex} of {resultsCount} results
        </ResultsCount>
      </ViewContainer>
    </Container>
  );
};

export default SortAndFilter;