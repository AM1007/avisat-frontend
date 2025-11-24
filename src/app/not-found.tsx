import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import NotFoundPage from '@/components/ui/NotFoundPage/NotFoundPage';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <NotFoundPage />
      </main>

      <Footer />
    </div>
  );
}