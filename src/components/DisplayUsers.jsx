import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {MdDeleteForever} from "react-icons/all.js";
import { removeUser } from "../store/slice/UserSlice";

const DisplayUsers = ()=>{

    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.users;
    });

    const deleteUser = (id) =>{
        dispatch(removeUser(id))
    };

    // console.log(data)
    return <Wrapper>
        {
            data.map((user, userId)=>{
                return <li key={userId}>
                    {user}
                    <button className="btn-delete" onClick={()=> deleteUser(userId)}>
                        <MdDeleteForever className="delete-icon"/>
                    </button>
                </li>
            })
        }
    </Wrapper>
}

const Wrapper = styled.section`
li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom:  1px solid #c2c2c2;
  }

  .btn-delete{
    border: none;
    background: none;
  }
`

export default DisplayUsers;