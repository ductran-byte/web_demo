import {db} from "./dexie";



const addItemToGioHang = async (name, qty, price, pic) => {
    db.giohang.add({name, qty, price, pic, totalPrice:price*qty});
}
const getAllGioHang = async () => {
    return await db.giohang.toArray();
}

const deleteGioHang = async (id) => {
    db.giohang.delete(parseInt(id));
    return await db.giohang.toArray();
}


const getGioHangById = async (id) => {
    return await db.giohang.get(parseInt(id));
}
export {addItemToGioHang,getAllGioHang,getGioHangById,deleteGioHang}

