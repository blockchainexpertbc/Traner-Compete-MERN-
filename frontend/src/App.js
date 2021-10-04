import { useEffect, useState } from 'react';
import './App.css';
import Layout from './Layout';
import Routes from './Routes';
import axios from 'axios';
import { baseURL } from './Common/const';

function App() {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {
      axios.get(`${baseURL}/api/user`)
          .then(res => {
              setUsers(res.data)
          })
      
  }, [0])

  return (
    <Layout>
      <Routes users = { users}/>
    </Layout>
  );
}

export default App;
