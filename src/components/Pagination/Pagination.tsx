import { Pagination } from "@mui/material";

interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  style: React.CSSProperties;
}

export default function PaginationComponent({ count, page, onChange, style }: PaginationProps) {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      style={style}
    />
  );
}