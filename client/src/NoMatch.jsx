import React from 'react';
import { useLocation } from 'react-router';

export default function NoMatch() {
  const location = useLocation()
  return (
    <>
      <h2>{location.pathname} not found</h2>
    </>
  );
}
