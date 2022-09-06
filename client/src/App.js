import Header from "./Components/Header/Header";
import Clients from "./Components/ClientMgmt/Clients";
import { AddClientModal } from "./Components/ClientMgmt/AddClientModal";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: cache,
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
       <div className='container'>
          <AddClientModal />
          <Clients />
       </div>
    </ApolloProvider>
    </>
  );
}

export default App;
