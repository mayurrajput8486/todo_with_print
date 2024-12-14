import { useState } from "react";

const Custdetails = () => {
    const [custname, setCustname] = useState('')
    const [product,setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [todo,setTodo] = useState([])

    const custName = (event) =>{
        const cust_name = event.target.value
        setCustname(cust_name)
    }

    const productName = (event) =>{
        const prod_name = event.target.value
        setProduct(prod_name)
    }

    const productPrice = (event) =>{
        const prod_price = event.target.value
        setPrice(prod_price)
    }

    const addProductHandler = () =>{
        if(custname.trim() && product.trim() && price.trim()){
            
            const today = new Date()
            const currentDate = today.toLocaleDateString()
            const currentTime = today.toLocaleTimeString()

            const date_time = `${currentDate} ${currentTime}`
 
            setTodo([...todo, {id : Date.now(), custname, product, price, date : date_time}])

            // After click on button the form filed cleared
            setCustname('')
            setProduct('')
            setPrice('')
        }else{
            alert('All Field Are Required')
        }
    }
    const printCustDetails = (customer) =>{
    const printdata = window.open("","", "width=800, height=600")
    printdata.document.write(`<html><head><title>Print Customer</title></head><body>`)
    printdata.document.write(`
            <h2>Customer Details</h2>
            <h3>Receipt No. : ${customer.id} </h3>
            <h3>Name : ${customer.custname}</h3>
            <h3>Product Name : ${customer.product}</h3>
            <h3>Price : ${customer.price}</h3>
            <h3>Date and Time : ${customer.date}</h3>
            <h3>Thank You !!! Visit Again</h3>
        `)
    printdata.document.write(`</body></html>`)
    printdata.print();
    printdata.close();
    }
    return (
        <div>
            <h2>Customer Details</h2>
            <div className="w-50 bg-dark p-4 mx-auto rounded-3">
                <div>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter Your Name"
                        value={custname}
                        onChange={custName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter Your Product"
                        value={product}
                        onChange={productName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter Product Price"
                        value={price}
                        onChange={productPrice}
                    />
                </div>
                <button className="btn btn-success w-100" onClick={addProductHandler }>
                    Submit
                </button>
            </div>
            <div id="printSection" className="w-50 mx-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Receipt No</th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Date and Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map((item,index)=>{
                                return(
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.custname}</td>
                                        <td>{item.product}</td>
                                        <td>{item.price}</td>
                                        <td>{item.date}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={()=>printCustDetails(item)}>
                                                Print
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Custdetails;
