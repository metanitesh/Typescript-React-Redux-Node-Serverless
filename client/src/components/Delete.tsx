import React from 'react';
type DeleteProps = {
  id: number,
  handleDelete: (id: number) => void
}

export default function Delete({ id, handleDelete }: DeleteProps) {
  return (
    <>
      <button onClick={(event) => {
        event.preventDefault()
        handleDelete(id)
      }}>Delete</button>
    </>
  );
}
