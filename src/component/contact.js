import React, {useState} from 'react';
import '../css/contact.css';
import { MdFacebook } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Contact() {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Liên hệ với chúng tôi</h2>
                <p>Địa chỉ: Trường ĐH FPT - Đường Tôn Thất Thuyết, Mỹ Đình 2, Nam Từ Liêm, Hà Nội</p>
                <p>Email: contact@example.com</p>
                <p>Điện thoại: </p>
                <div style={{
                    fontSize:'50px',
                    margin: '20px 10px',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    color: '#3b5998',
                    display: 'flex',
                    gap: '20px',

                }}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <MdFacebook />

                    </a>
                    <a href="https://www.messenger.com"
                       target="_blank" rel="noopener noreferrer">
                        <MdMessage />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <SlSocialInstagram />
                    </a>
                    <a href="https://www.linkedin.com"
                       target="_blank" rel="noopener noreferrer">
                        <TiSocialLinkedinCircular />
                    </a>
                </div>
            </div>
            <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1038081817537!2d105.7792840758878!3d21.02853198778523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32a66b653%3A0x80f887e0b3957f10!2zVHLGsOG7nW5nIMSQSCBGUFQgLSDEkMaw4budbmcgVMO0biBUaOG6pXQgVGh1eeG6v3Q!5e0!3m2!1svi!2s!4v1722071361459!5m2!1svi!2s"
                    width="600" height="450" style={{border:1}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-form">
                <h2>Gửi tin nhắn</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Tên của bạn"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email của bạn"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Tin nhắn của bạn"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <button type="submit">Gửi</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
