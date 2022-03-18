import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to={`/single-page/${1}`}>Check this first page</Link>
        <Link to={`/single-page/${2}`}>Check this second page</Link>
      </nav>
    </>
  );
}

export default Home;
