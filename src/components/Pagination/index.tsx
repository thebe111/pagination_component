import React, { useState, useEffect } from "react";

import {
  StyledPagination,
  StyledFirstButton,
  StyledLastButton,
  StyledPreviousButton,
  StyledNextButton,
  StyledPreviousIcon,
  StyledNextIcon,
  StyledFirstIcon,
  StyledLastIcon,
  StyledPageItem,
  StyledContinueIcon,
} from "./styles";

interface Props {
  pages: number;
  currentPage: number;
  setCurrentPage(page: number): void;
}

const Pagination: React.FC<Props> = ({
  pages,
  currentPage,
  setCurrentPage,
}) => {
  const [pageNumberArray, setPageNumberArray] = useState<number[]>([]);

  function generatePagesArray(pages: number): void {
    const pageNumbers: number[] = [];

    for (let x = 1; x <= pages; x++) {
      pageNumbers.push(x);
    }

    setPageNumberArray(pageNumbers);
  }

  function next() {
    if (currentPage === pageNumberArray.length) return;
    setCurrentPage(currentPage + 1);
  }

  function previous() {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  }

  function goTo(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    generatePagesArray(pages);
  }, [pages]);

  return (
    <StyledPagination>
      {pageNumberArray.length > 5 && (
        <StyledFirstButton onClick={() => goTo(1)}>
          <StyledFirstIcon />
        </StyledFirstButton>
      )}

      <StyledPreviousButton onClick={previous}>
        <StyledPreviousIcon />
      </StyledPreviousButton>

      {pageNumberArray.length > 5 ? (
        <>
          {pageNumberArray
            .slice(
              currentPage === 1
                ? currentPage - 1
                : currentPage === 2
                ? currentPage - 2
                : currentPage - 3,
              currentPage === pageNumberArray.length
                ? currentPage
                : currentPage === pageNumberArray.length - 1
                ? currentPage + 1
                : currentPage + 2
            )
            .map((pageItem) => (
              <>
                <StyledPageItem
                  onClick={() => goTo(pageItem)}
                  selected={pageItem === currentPage ? true : false}
                >
                  {pageItem !== 0 ? pageItem : <StyledContinueIcon />}
                </StyledPageItem>
              </>
            ))}
        </>
      ) : (
        pageNumberArray.map((pageItem) => (
          <StyledPageItem
            onClick={() => goTo(pageItem)}
            selected={pageItem === currentPage ? true : false}
          >
            {pageItem}
          </StyledPageItem>
        ))
      )}

      <StyledNextButton onClick={next}>
        <StyledNextIcon />
      </StyledNextButton>

      {pageNumberArray.length > 5 && (
        <StyledLastButton onClick={() => goTo(pageNumberArray.length)}>
          <StyledLastIcon />
        </StyledLastButton>
      )}
    </StyledPagination>
  );
};

export { Pagination };
