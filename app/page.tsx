import AreaChartWithClickEvent from '@/components/area-chart'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Tremor Charts</h1>

        <div className='mt-12'>
          <AreaChartWithClickEvent />
        </div>
      </div>
    </section>
  )
}
