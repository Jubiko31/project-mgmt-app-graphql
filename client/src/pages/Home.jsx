import Clients from "../Components/ClientMgmt/Clients";
import { AddClientModal } from "../Components/ClientMgmt/AddClientModal";
import { Projects } from '../Components/ProjectMgmt/Projects';

export const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  )
}
