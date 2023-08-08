import React from 'react'
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slice/UserSlice";
import styled from 'styled-components';

const DeleteAllUser = () => {
  
  const dispatch = useDispatch();

  const deleteAllUser = () =>{
    dispatch(deleteUsers());
  }

  return (
    <Wrapper>
      <button className='btn add-btn' onClick={deleteAllUser}>DeleteAllUser</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.btn{
  margin-top: 2rem;
}
`

export default DeleteAllUser
