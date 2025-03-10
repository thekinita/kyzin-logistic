const Stats = () => {
  return (
    <section className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4'>
          <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
            <dt className='text-base/7'>Отправленных товаров</dt>
            <dd className='order-first text-3xl font-semibold tracking-tight sm:text-5xl text-accent'>
              21.9M
            </dd>
          </div>
          <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
            <dt className='text-base/7'>Довольных клиентов</dt>
            <dd className='order-first text-3xl font-semibold tracking-tight sm:text-5xl text-accent'>
              2 314
            </dd>
          </div>
          <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
            <dt className='text-base/7'>Км каждый день</dt>
            <dd className='order-first text-3xl font-semibold tracking-tight sm:text-5xl text-accent'>
              14 546
            </dd>
          </div>
          <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
            <dt className='text-base/7'>Км по Москве</dt>
            <dd className='order-first text-3xl font-semibold tracking-tight sm:text-5xl text-accent'>
              6 000
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default Stats
