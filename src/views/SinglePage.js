import { useParams } from "react-router-dom";

function SinglePage() {
  const params = useParams();

  return (
    <main>
      <h2>Welcome to the single page!</h2>
      <p>My id is: {params.id}</p>
    </main>
  );
}

export default SinglePage;
