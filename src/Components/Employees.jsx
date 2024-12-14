import React, { useState } from 'react'

const Employees = () => {
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        contact :'',
        company :'',
        role : ''
    })

    
    const [employees, setEmployee] = useState([])
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value})
    }


    const addData = () => {
        if(formData.name && formData.email && formData.contact && formData.company && formData.role){
            setEmployee([...employees, formData])
            setFormData({
                name : '',
                email : '',
                contact :'',
                company :'',
                role : ''
            })
        }else{
            alert('All Field Required')
        }
    }
  return (
    <div>
        <h1>Employee Management App</h1>
        <div className='bg-warning w-50 mx-auto p-4 rounded-4'>
            <div className='mb-3'>
                <input type='text' 
                placeholder='Enter Full Name'
                className='form-control'
                name='name'
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
                <input type='email'
                placeholder='Enter Email'
                className='form-control'
                name='email'
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
                <input type='tel'
                placeholder='Enter Contact'
                className='form-control'
                name='contact'
                value={formData.contact}
                onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
                <input type='text'
                placeholder='Enter Company Name'
                className='form-control'
                name='company'
                value={formData.company}
                onChange={handleChange}
                
                />
            </div>
            <div className='mb-3'>              
                <select className='form-control' onChange={handleChange} value={formData.role} name='role'>
                    <option value=''>Select Role</option>
                    <option value='Backend Developer'>Backend Developer</option>
                    <option value='Frontend Developer'>Frontend Developer</option>
                    <option value='Full Stack Developer'>Full Stack Developer</option>
                    <option value='Devops'>Devops</option>
                </select>
            </div>
            <div>
                <button className='btn btn-success w-50' onClick={addData}>Add Data</button>
            </div>
        </div>
        <table className='table w-50 mx-auto table-dark text-light mt-3'>
            <thead>
                <tr>
                    <th>Emp_ID</th>
                    <th>Emp Name</th>
                    <th>Emp Email</th>
                    <th>Emp Contact</th>
                    <th>Company Name</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp,index)=>{
                        return(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.contact}</td>
                                <td>{emp.company}</td>
                                <td>{emp.role}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Employees
