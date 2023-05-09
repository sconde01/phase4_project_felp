import React, {useContext} from 'react'
import { ErrorsContext } from '../Context/ErrorsContext';

export const Errors = () => {
  const { errors } = useContext(ErrorsContext);
  const errorList = errors.map((error, idx) => 
    
    <h6 key={idx}> { error } </h6>) ;

  return (
    <div>{ errorList }</div>
  )
}
