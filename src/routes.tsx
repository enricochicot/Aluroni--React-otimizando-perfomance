import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Cardapio = lazy(() => import('pages/Cardapio'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const NotFound = lazy(() => import('pages/NotFound'));
const Inicio = lazy(() => import('pages/Inicio'));
const Prato = lazy(() => import('pages/Prato'));
const Sobre = lazy(() => import('pages/Sobre'));

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Suspense fallback ={<p>Carregando...</p>}>
          <Menu />
          <Routes>
            <Route path='/' element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<Sobre />} />
            </Route>
            <Route path='prato/:id' element={<Prato />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </main>
  );
}