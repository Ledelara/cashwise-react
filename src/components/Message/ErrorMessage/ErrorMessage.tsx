import { Typography } from "@mui/material";
import "@/styles/components/_error-message.scss";

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Typography className="error-message">
      {message}
    </Typography>
  );
}
