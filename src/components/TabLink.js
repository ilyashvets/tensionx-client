export default function TabLink(props) {
  return (
    <li className='nav-item'>
      <a className={props.activeTab === props.name ? 'nav-link active' : 'nav-link'} href='#' onClick={() => {
        if (props.activeTab !== props.name) props.setActiveTab(props.name)
      }} data-query={props.name}>{props.title}</a>
    </li>
  )
}