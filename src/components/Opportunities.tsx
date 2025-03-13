const Opportunities = () => {
  return (
    <section className='relative flex flex-col lg:flex-row max-w-7xl mx-auto py-20 px-6'>
      <div className='lg:w-1/3 lg:pr-10 pb-10 sm:sticky top-10 h-fit self-start'>
        <h2 className='text-3xl font-bold text-accent'>
          Возможности для вашего бизнеса
        </h2>
      </div>
      <div className='lg:w-2/3 space-y-8'>
        <div>
          <h3 className='text-xl font-semibold '>Ежедневный забор груза</h3>
          <p>
            Мы забираем товары для маркетплейсов с любого адреса в Москве и
            Московской области, также со складов транспортных компаний и других
            регионов и стран.
          </p>
        </div>
        <div>
          <h3 className='text-xl font-semibold '>Прием заказов</h3>
          <p>
            Ежедневно принимаем заказы по доставке груза на маркетплейсы в
            течение суток, а также на точную дату.
          </p>
        </div>
        <div>
          <h3 className='text-xl font-semibold '>Работаем по договору</h3>
          <p>
            Выполняем услуги исключительно по договору. Так как уверены в
            качестве оказываемых услуг и договор является тому подтверждением.
          </p>
        </div>
        <div>
          <h3 className='text-xl font-semibold '>Время</h3>
          <p>
            Сдача товара на нужный Вам маркетплейс происходит по выбранному Вами
            слоту.
          </p>
        </div>
        <div>
          <h3 className='text-xl font-semibold '>Соответствие</h3>
          <p>
            Вы полностью контролируете движение Вашего товара. С нами Вы будете
            спокойны за свой товар, так как у нас качество выполняемых работ
            соответствует цене.
          </p>
        </div>
        <div>
          <h3 className='text-xl font-semibold '>Гарантия доставки</h3>
          <p>
            Мы - Ваши партнеры и также принимаем участие в разрешении возможных
            трудностей при сдаче Вашего груза.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Opportunities
