import React from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { SearchForm } from './components/SearchForm';
import { HeroesList } from './HeroesList';
//import { heroData } from "./data";



function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto">
        <h1 className="mx-auto mt-6">Superheroes</h1>
        <SearchForm />
        <HeroesList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
