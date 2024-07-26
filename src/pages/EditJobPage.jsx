import React from 'react'

const EditJobPage = () => {
  return (
    <>
        edit job!
    </>
  )
}

const editJobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  console.log(data)
  return data;
};


export {EditJobPage as default, editJobLoader}