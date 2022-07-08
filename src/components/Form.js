export default function Form(props) {
  return (
    <form className='mx-5 p-5 border rounded' onSubmit={e => {
      e.preventDefault()
      props.onSubmit()
    }}>
      <h3 className='mb-5'>{props.title}</h3>
      {props.children}
    </form>
  )
}