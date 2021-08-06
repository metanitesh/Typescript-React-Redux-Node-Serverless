import React, { useState } from 'react';

export default function useLoader() {
  const [state, setState] = useState(false)
  return [state, setState]
}
