import './App.css'
import HeadCard from './components/HeadCard'
import Card from './components/cart/Card'

function App() {
  const items = [
    { 
      id: 1,
      title: "Aviation Law",
      description: "Aviation Safety guide everything we do, which is why reducing surface safety risk remains a top priorit",
      data: "23/Aug/2021"
    },
    { 
      id: 2,
      title: "Degree",
      description: "Aviation Safety guide everything we do, which is why reducing surface safety risk remains a top priorit",
      data: "23/Aug/2021",
      readMoreText: "Ok"
    },
    { 
      id: 3,
      title: "Sub Degree",
      description: "Aviation Safety guide everything we do, which is why reducing surface safety risk remains a top priorit",
      data: "23/Aug/2021",
      readMoreText: "Click me"

    },
  ]

  return (
    <div className='w-full'>
      <div className=' py-10'>
        <HeadCard/>
      </div>
      <div className='w-[900px] flex justify-center items-center'>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
          {items.map((item) => (
            <Card id={item.id} title={item.title} description={item.description} date={item.data} readMoreText={item.readMoreText}/>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
