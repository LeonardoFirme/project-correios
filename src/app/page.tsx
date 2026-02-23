// src/app/page.tsx
import SearchTracking from "@/components/SearchTracking";
import { HomeFreightForm } from "@/components/HomeFreightForm";
import { QuickAccessGrid } from "@/components/QuickAccessGrid";
import { DynamicBanner } from "@/components/DynamicBanner";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">

      {/* Banner Principal Dinâmico Integrado */}
      <DynamicBanner />

      {/* Área de Rastreamento Dinâmico */}
      <section className="w-full bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-start gap-8">

          {/* Componente Integrado 100% com API */}
          <div className="w-full lg:w-1/2">
            <SearchTracking />
          </div>

          <div className="hidden lg:block w-px h-24 bg-yellow-400 mx-4 mt-6"></div>

          {/* Aviso Lateral */}
          <div className="w-full lg:w-1/2 flex items-center h-full mt-6 lg:mt-0">
            <p className="text-sm text-blue-700 font-bold w-full text-center lg:text-left px-4">
              Utilize a busca rápida ao lado para localizar sua encomenda instantaneamente ou acesse o histórico de pacotes salvos em seu navegador.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Cálculo de Frete e Alertas */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">

          {/* Componente Integrado 100% com API */}
          <HomeFreightForm />

          {/* Banner Fixo */}
          <div className="w-full lg:w-1/3 border border-gray-200 rounded p-6 text-center flex flex-col justify-center items-center shadow-sm">
            <div className="mb-4 text-blue-900 font-black text-3xl leading-tight">
              Cuidado <br />com as <br /><span className="bg-yellow-400 px-2 py-1">notícias falsas</span>
            </div>
            <p className="text-blue-900 font-medium">Saiba como navegar seguro pelas informações, produtos e serviços dos Correios sem cair em golpes!</p>
          </div>
        </div>
      </section>

      {/* Grid de Ícones Inferior */}
      <QuickAccessGrid />
    </div>
  );
}