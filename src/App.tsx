import React from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { HeroesList } from './HeroesList';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto">
        <div className="my-20 max-w-screen-md mx-auto">
          <h1 className="text-center text-5xl ">Superheroes Database</h1>
        </div>
        <HeroesList />
      </main>
      <footer>

        <Footer />
      </footer>
    </>
  );
}

export default App;
