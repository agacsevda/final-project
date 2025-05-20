import React from 'react';
import { Button } from '@/components/ui/button';

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-6 p-8">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold">Siparişiniz Alındı!</h1>
        <p className="text-gray-600">Ödemeniz başarıyla gerçekleştirildi.</p>
        <p className="text-gray-600">Siparişiniz en kısa sürede hazırlanıp kargoya verilecektir.</p>
        <div className="pt-4">
          <a href="/">
            <Button variant="default" size="lg">
              Alışverişe Devam Et
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage; 