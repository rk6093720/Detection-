import React, { useState, useEffect } from "react";
import { HStack, Button, Box } from "@chakra-ui/react";

const Pagination = ({ current, pageCount, setCurrent }) => {
  const [pagination, setPagination] = useState({
    prev: false,
    next: false,
    items: [],
  });

  useEffect(() => {
    const generatePagination = () => {
      let items = [];
      for (let i = 1; i <= pageCount; i++) {
        items.push(i);
      }

      setPagination({
        prev: current > 1,
        next: current < pageCount,
        items,
      });
    };

    generatePagination();
  }, [current, pageCount]);

  return (
    <Box display="flex" justifyContent="flex-end">
      <HStack my="3" spacing="1">
        {pagination.prev && (
          <Button
            aria-label="previous page"
            onClick={() => setCurrent(current - 1)}
            isDisabled={!pagination.prev}
            variant="outline"
          >
            Prev
          </Button>
        )}

        {pagination.items.map((page) => {
          if (typeof page === "string") {
            return <span key={page}>...</span>;
          }

          return (
            <Button
              key={page}
              onClick={() => setCurrent(page)}
              variant={page === current ? "solid" : "outline"}
            >
              {page}
            </Button>
          );
        })}
        {pagination.next && (
          <Button
            aria-label="next page"
            onClick={() => setCurrent(current + 1)}
            variant="outline"
          >
            Next
          </Button>
        )}
      </HStack>
    </Box>
  );
};

export default Pagination;
