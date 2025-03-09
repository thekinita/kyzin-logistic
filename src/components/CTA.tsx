export default function CTA() {
  return (
    <div className='relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:px-24 lg:pt-0'>
      <div className='mx-auto text-center lg:py-32'>
        <h2 className='text-3xl font-semibold tracking-tight text-balance sm:text-4xl'>
          Доставка товаров от поставщика до маркетплейсов
        </h2>
        <div className='mt-10'>
          <a
            href='contact'
            className='text-base/6 font-semibold text-accent hover:text-black dark:hover:text-white duration-200'
          >
            Оставить заявку <span aria-hidden='true'>→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
