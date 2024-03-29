import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import Stack from "@mui/material/Stack";

const SearchButtonWrapper = () => {
  return (
    <Stack direction="row" spacing={0}>
      <Button
        variant="contained"
        sx={{
          maxHeight: "35px",
          mt: 2,
          backgroundColor: "rgba(14, 54, 141, 0.99)",
        }}
      >
        Go Track
      </Button>
    </Stack>
  );
};

export default SearchButtonWrapper;
