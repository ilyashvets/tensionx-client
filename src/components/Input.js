export default function Input(props) {
  const {id, type, label} = props

  return (
    <div className='mb-3'>
      <label htmlFor={id} className='form-label'>{label}</label>
      <input
        type={type}
        className='form-control'
        id={id}
        required={true}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
  )
}