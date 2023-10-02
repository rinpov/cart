import './Card.css'
import {FC} from "react"

interface CardProps{
  id: number,
  title: string,
  description: string,
  date: string,
  readMoreText?: string 
}


const Card: FC<CardProps> = (props) => {
  return (
    <div className='wrap-card'>
      <div className="card card-custom space-y-3 py-7 cursor-pointer">
        <h3 className="font-bold">{props.title}</h3>
        <p>
          {props.description}
        </p>
        <div className='button space-x-2'>
          <span className='readmore cursor-pointer'>{props.readMoreText === undefined ? "Read more" : props.readMoreText}</span>
          <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm6-5q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2Z"/></svg>
        </div>
        <div className='bot gap-1'>
          <svg className='pdf-icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M9 16a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H9Zm1.5 3H10v-1h.5a.5.5 0 0 1 0 1Zm3.5-2a1 1 0 0 1 1-1h.5a3.5 3.5 0 1 1 0 7H15a1 1 0 0 1-1-1v-5Zm2 3.915a1.5 1.5 0 0 0 0-2.83v2.83ZM20 22v-5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-2v1h2a1 1 0 1 1 0 2h-2v1a1 1 0 1 1-2 0ZM17 9V2H8a3 3 0 0 0-3 3v8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2v1a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-1a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2v-1h-7a3 3 0 0 1-3-3Zm10 6v9H5v-9h22Zm-8-6V2.117a3 3 0 0 1 1.293.762l5.828 5.828A3 3 0 0 1 26.883 10H20a1 1 0 0 1-1-1Z"/></svg>
          <p>(PDF)({props.date})</p>
        </div>
      </div>
    </div>
  )
}

export default Card