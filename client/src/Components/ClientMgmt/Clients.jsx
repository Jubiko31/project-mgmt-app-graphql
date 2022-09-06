import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import { Loader } from '../Loader';

import { GET_CLIETNS } from '../../queries/clientQueries';

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIETNS);
  
  if (loading) return <Loader />
  if (error) return <p>Something's wrong I can feel it...</p>

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map(client => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Clients