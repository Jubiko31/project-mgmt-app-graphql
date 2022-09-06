import { Link, useParams } from "react-router-dom";
import { Loader } from '../Components/Loader';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_PROJECT } from "../queries/projectQueries";
import ClientInfo from '../Components/ClientInfo';
import { EditForm } from "../Components/ProjectMgmt/EditForm";
import { DeleteProject } from "../Components/ProjectMgmt/DeleteProject";

export const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_PROJECT, {
    variables: { id }
  });

  if (loading) return <Loader />
  if (error) return <p>Oh, Something's went wrong...</p>

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">Back</Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className='mt-3'>Project Status</h5>
          <p className='lead'>{data.project.status}</p>

          <ClientInfo client={data.project.client} />

          <EditForm project={data.project} />

          <DeleteProject projectId={data.project.id} />
        </div> 
      )}
    </>
  )
}
