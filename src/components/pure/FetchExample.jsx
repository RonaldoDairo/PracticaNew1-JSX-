import React,{ useState, useEffect } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails } from '../../services/fecthService';
import { Height } from '@mui/icons-material';
const FetchExample = () => {
    
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);
    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = ()=>{
            getAllUsers()
            .then((response)=> {
                console.log('All users', response.data)
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page)
            })
            .catch((err)=>{
                alert(`Error while retreiving the users: ${err}`)
            })
            .finally(()=> {
                console.log('Ended obtaining users: ')
                console.table(users);
              })
    }
    const obtainPageUsers = (page)=>{
        getAllPagedUsers(page)
                .then((response)=> {
                    console.log('All Paged users', response.data)
                    setUsers(response.data);
                    setPages(response.total_pages);
                    setTotalUsers(response.total);
                    setUsersPerPage(response.per_page)
                })
                .catch((err)=>{
                    alert(`Error while retreiving the users: ${err}`)
                })
                .finally(()=> {
                    console.log('Ended obtaining users: ')
                    console.table(users);
                })
    }
    const obtainUserDetails=(id)=>{
        getUserDetails(id)
        .then((response)=> {
            console.log('All users', response.data)
            setSelectedUser(response.data);
        })
        .catch((err)=>{
            alert(`Error while retreiving the users: ${err}`)
        })
        .finally(()=> {
            console.log('Ended obtaining users: ')
            console.table(selectedUser);
          })
    }
    return (
        <div>
            <h2>
                Users:
            </h2>
            {
                users.map((user, index)=>{
                    return (
                        <p key = {index} onClick={()=>obtainUserDetails(user.id)}>
                            {user.first_name } {user.last_name }
                        </p>
                    )
                    
                })
            }
            <p>Showing {usersPerPage} user of  {totalUsers} in total.</p>
            <button onClick={()=>obtainPageUsers(1)}>
                1
            </button>
            <button onClick={()=>obtainPageUsers(2)}>
                2
            </button>
            <div>
                <h3>
                    User Datails

                </h3>
                { selectedUser && (
                <div>
                    <p>Name: {selectedUser.first_name} </p>
                    <p>Last Name: {selectedUser.last_name} </p>
                    <p>Email: {selectedUser.last_name} </p>
                    <img alt='Avatar' src={selectedUser.avatar} style={{height: '50px', width: '50px'}}/>

                </div>
                )}
            </div>

        </div>
    );
}

export default FetchExample;
