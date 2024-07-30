import React, {useContext} from 'react';
import * as gioHangService from "../service/giohang";
import {addItemToGioHang} from "../service/giohang";
import { useNavigate } from "react-router-dom";
import {CurrentUserContext} from "../App";

function Product({ product }) {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(CurrentUserContext); // Lấy thông tin từ context
    const formatter = new Intl.NumberFormat('en-US');
    const addGioHang = async () => {
        if (isLoggedIn) {
            await gioHangService.addItemToGioHang(product.name, 1,product.age, product.pic, );
            navigate("/giohang");
        } else {
            alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
            navigate("/login");
        }
    };

    return (
        <body>
        <div className="product-item" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            margin: '100px 0',
            backgroundColor: 'white',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            marginLeft: '7%',
            flexDirection: 'column',
            border: '1px solid #ddd',
            borderRadius: '5px',
            overflow: 'hidden',
            width:'400px',
            height:'600px'

        }}>
            <div className="product-image" style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url(${product.pic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                width: 'auto',
                display: 'block',
                margin: '0 auto',
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
                transition: 'transform 0.3s ease'

            }}>
                <img src={product.pic} alt={product.name} style={{
                    width: 'auto',
                    display: 'block',
                    margin: '0 auto', /* Căn giữa ảnh theo chiều ngang */
                    maxWidth: '100%', /* Giới hạn chiều rộng tối đa của ảnh để không vượt quá ô */
                    height: 'auto',
                    objectFit: 'cover', // Đảm bảo ảnh lấp đầy khung
                    transition: 'transform 0.3s ease'


                }}/>

            </div>
            <div className="product-info" style={{padding: '15px', textAlign: 'center'}}>
                <h3 className="product-name" style={{
                    fontSize: '1.2em',
                    marginBottom: '10px',
                    color: '#333'
                }}> GIÁ TIỀN : {formatter.format(product.age)} VNĐ</h3>
            </div>
            <div className="product-info" style={{padding: '15px', textAlign: 'center'}}>
                <h3 className="product-name" style={{
                    fontSize: '1.2em',
                    marginBottom: '10px',
                    color: '#333'
                }}> Tên Sản Phẩm :{product.name}</h3>
                <button onClick={() => addGioHang()} className="add-to-cart" style={{
                    backgroundColor: '#f0ad4e',
                    color: 'white',
                    padding: '8px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: '100%',
                    disabled:!isLoggedIn
                }}>Thêm vào giỏ hàng</button>
            </div>
        </div>
        </body>
    );
}

export default Product;

