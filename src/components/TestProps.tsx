
type GreetProps = {
    name: string,
    age: number
}

const TestProps = (props: GreetProps) => {
  return (
    <div>
        <h1>{props.name} and {props.age}</h1>
    </div>
  )
}

export default TestProps