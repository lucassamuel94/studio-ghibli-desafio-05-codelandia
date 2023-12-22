import illustration from '../assets/illustration01.png'

export default function Content() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 lg:justify-between items-center gap-y-6 max-w-[448px] lg:max-w-none mx-auto'>
      <div className='lg:max-w-[502px]'>
        <h2 className='font-heading lg:text-xl'>
          HAYAO MIYAZAKI
        </h2>
        <h3 className='mt-2 font-heading text-3xl lg:text-6xl lg:w-[420px]'>
          A VIAGEM DE CHIHIRO
        </h3>

        <p className='mt-4 lg:text-2xl'>
          Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.
        </p>

        <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <a
            href="#"
            className='bg-brand hover:bg-brand/90 text-black flex items-center justify-center gap-2 cursor-pointer py-3.5 text-lg font-bold uppercase rounded transition-all duration-300'
          >
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.4834 10.9962L8.97594 2.734C8.69267 2.56131 8.36865 2.46687 8.03696 2.46033C7.70526 2.45378 7.37777 2.53536 7.08791 2.69673C6.79804 2.85811 6.55618 3.0935 6.38702 3.37889C6.21785 3.66428 6.12744 3.98944 6.125 4.32119V20.8456C6.12744 21.1773 6.21785 21.5025 6.38702 21.7879C6.55618 22.0733 6.79804 22.3086 7.08791 22.47C7.37777 22.6314 7.70526 22.713 8.03696 22.7064C8.36865 22.6999 8.69267 22.6054 8.97594 22.4328L22.4834 14.1706C22.7558 14.0048 22.9809 13.7717 23.1371 13.4937C23.2934 13.2157 23.3754 12.9022 23.3754 12.5834C23.3754 12.2645 23.2934 11.951 23.1371 11.6731C22.9809 11.3951 22.7558 11.162 22.4834 10.9962ZM8.375 20.1631V5.00369L20.765 12.5834L8.375 20.1631Z" fill="#0B0A0A" />
            </svg>

            <span>Assistir agora</span>
          </a>
          <a
            href="#"
            className='border border-brand rounded py-3.5 flex items-center justify-center uppercase font-bold hover:bg-brand/10 transition-all duration-300'
          >
            Assista o trailer
          </a>
        </div>
      </div>
      <figure className='lg:-mr-20 order-first lg:order-last flex items-center justify-center '>
        <img src={illustration} alt="Ilustração" className='max-w-80 md:max-w-96 lg:max-w-full animate-float' />
      </figure>
    </section>
  )
}