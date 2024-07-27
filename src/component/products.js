import React, { useEffect, useState } from 'react';
import Product from './product';
import '../css/product.css';
import * as studentService from "../service/student";

function Products() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getAll = async () => {
            const result = await studentService.getAllStudent();
            setStudents(result);
        };
        getAll();
    }, []);

    return (
        <div className="products-page">
            <div className="products-header">
                <h1 style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#3f51b5',
                    marginBottom: '30px',
                    marginTop: '30px',
                    position: 'sticky',
                    top: 0,
                }}>Danh Sách Sản Phẩm</h1>
            </div>
            <div className={`product-list ${students.length < 4 ? 'center-items' : ''}`}>
                {students.map(student => (
                    <Product key={student.id} product={student} />
                ))}
            </div>
        </div>
    );
}

export default Products;
