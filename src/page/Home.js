import {useState} from 'react';
import TabLink from '../components/TabLink';

export default function Home(props) {

  const [activeTab, setActiveTab] = useState(null)
  const [content, setContent] = useState(null)

  function getContent(alias) {
    props.getContent(alias, setContent)
  }

  return (
    <>
      <ul className='nav nav-tabs' onClick={e => e.target['dataset'].query && getContent(e.target['dataset'].query)}>
        <TabLink activeTab={activeTab} setActiveTab={setActiveTab} title='Guest' name='guest'/>
        <TabLink activeTab={activeTab} setActiveTab={setActiveTab} title='User' name='user'/>
        <TabLink activeTab={activeTab} setActiveTab={setActiveTab} title='Supervisor' name='supervisor'/>
        <TabLink activeTab={activeTab} setActiveTab={setActiveTab} title='Administrator' name='administrator'/>
      </ul>
      <div className='border border-top-0 p-3 border-grey'>
        {content || 'No content'}
      </div>
    </>
  )
}