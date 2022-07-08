export default function Select(props) {
  return (
    <div className='mb-3'>
      <label htmlFor={props.id} className='form-label'>Role</label>
      <select
        className='form-select'
        id={props.id}
        required={true}
        defaultValue={props.value}
        onChange={e => props.onChange(e.target.value)}
      >
        {props.list.map((item, index) => (
          <option key={index} value={item.toLowerCase().replace(' ', '-')}>{item}</option>))}
      </select>
    </div>
  )
}