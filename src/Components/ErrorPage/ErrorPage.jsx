import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="max-h-full my-auto max-w-full mx-auto" id="error-page">
      <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
      <p className="text-2xl font-semibold">The requested page could not be found.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
