import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { OperatorsList } from '@/components/operators/OperatorsList';
import { CustomerSupport } from '@/components/support/CustomerSupport';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            { label: 'Ferrytickets', href: '/' },
            { label: 'Operators', href: '/operators' }
          ]}
        />
      </div>
      <OperatorsList />
      <CustomerSupport />
      <Footer />
    </main>
  );
}