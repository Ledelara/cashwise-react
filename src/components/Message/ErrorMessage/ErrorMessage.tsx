import { Typography } from "@mui/material";

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Typography variant="h6" color="error" textAlign="center">
      {message}
    </Typography>
  );
}
