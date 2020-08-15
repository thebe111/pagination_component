import React, { useState, useEffect } from "react";

import { Pagination } from "./components/Pagination";

const App = () => {
  const [elements, setElements] = useState<number[]>([]);
  const [displayedPages, setDisplayedPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const quantityPerPage = 1;

  function getDisplayedPages(): void {
    const indexOfLastElement = currentPage * quantityPerPage;
    const indexOfFirstElement = indexOfLastElement - quantityPerPage;

    setDisplayedPages(elements.slice(indexOfFirstElement, indexOfLastElement));
  }

  function getPagesQuantity(): number {
    return Math.ceil(elements.length / quantityPerPage);
  }

  // async function
  function getElements() {
    setElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  }

  useEffect(() => {
    getElements();
  }, []);

  useEffect(() => {
    getDisplayedPages();
  }, [currentPage, elements, quantityPerPage]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 50,
        }}
      >
        {displayedPages.map((item) => (
          <p style={{ padding: 20 }}>{item}</p>
        ))}
      </div>

      <Pagination
        pages={getPagesQuantity()}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default App;
