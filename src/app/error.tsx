"use client";

import { Button } from "react-bootstrap";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorPageProps) => {
  return (
    <div>
      <h1>Error 😵‍💫</h1>
      <p>Something went wrong</p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
};

export default Error;
