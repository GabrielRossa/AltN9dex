import React from 'react';

import './styles.css';
import { Header } from '../Header/index';
import { SquareCard } from '../SquareCard/index';

import ferrari1 from '../../assets/ferrari-1.png'
import ferrari2 from '../../assets/ferrari-2.png'
import ferrari3 from '../../assets/ferrari-3.png'
import ferrari4 from '../../assets/ferrari-4.png'
import ferrari5 from '../../assets/ferrari-5.png'
import ferrari6 from '../../assets/ferrari-6.png'

export const ProcessSection = () => {
  return (
    <section className='w-screen md:h-screen flex flex-col items-center' style={{ backgroundColor: '#0B0B0D' }}>
      <Header title="O processo" desc="Um pouco de como funciona nosso processo de criação de conteúdo." />

      <div className='flex flex-col md:gap-0 gap-5 items-center justify-center w-full'>
        <div className='flex   md:flex-row flex-col md:mb-10 gap-5 md:gap-20'>
          <SquareCard cardBg={ferrari1} number="1" title="Ideia" desc="Nesta fase, conceitos criativos são gerados e desenvolvidos, moldando o direcionamento e a narrativa do projeto audiovisual." />
          <SquareCard cardBg={ferrari2} number="2" title="Planejamento" desc="Aqui, cada detalhe é meticulosamente organizado, desde local, equipamentos e ângulos utilizados, garantindo uma execução fluida e eficiente" />
          <SquareCard cardBg={ferrari3} number="3" title="Captação" desc="O momento em que a magia ganha vida, onde as imagens são registradas com maestria, capturando a essência e a emoção de cada momento." />
        </div>
        <div className='flex md:flex-row flex-col md:mb-10 gap-5 md:gap-20'>
          <SquareCard cardBg={ferrari4} number="4" title="Edição" desc="A habilidade artística se une à técnica nesta etapa, dando forma às imagens e sons capturados, criando uma narrativa coesa e envolvente." />
          <SquareCard cardBg={ferrari5} number="5" title="Validação" desc="Uma revisão crítica é realizada para garantir que a visão inicial seja preservada, ajustando detalhes conforme necessário para alcançar a excelência." />
          <SquareCard cardBg={ferrari6} number="6" title="Publicação" desc="O momento de compartilhar o trabalho finalizado com o mundo, apresentando-o ao público-alvo de maneira estratégica e impactante." />
        </div>

      </div>
    </section>
  );
};
