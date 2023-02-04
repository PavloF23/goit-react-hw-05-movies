import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header, Link, Footer } from './Layout.styled'

export const Layout = () => {
  return (
    <>
      <Header>
        <div><span>🎞Movie Poster</span></div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet/>
      </Suspense>
      <Footer>the developer: pavel.fastovets@gmail.com</Footer>
    </>    
  );
};