require('dotenv').config();
import nodemailer from "nodemailer";

let sendSimpleEmail = async (dataSend) => {
    // console.log('Check reciverEmail: ', reciverEmail);

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({

        from: '"Dương Ngô Hùng" <duongngohung1118@gmail.com>', // sender address
        to: dataSend.reciverEmail, // list of receivers
        subject: "Email Confirm Order", // Subject line
        html: getBodyEmail(dataSend),

    });

}

let getBodyEmail = (dataSend) => {
    let result = '';
    if (dataSend.language === 'vi') {
        result = `<h3>Xin chào ${dataSend.customerName}!</h3>
        <p>Bạn nhận được email này vì đã mua hàng online trên <h4>Buti Shoe</h4></h4></p>
        <b>Thông tin đơn hàng</b>
        <div><p>Người nhận: ${dataSend.customerName} </p></div>
        <div><p>Tên hàng: ${dataSend.productName} </p></div>
        <div><p>Số lượng: ${dataSend.quantity} </p></div>
        <div><p>Size: ${dataSend.size} </p></div>

        <div><p>Giá sản phẩm: ${dataSend.price} </p></div>
        <div><p>Đơn giá: ${dataSend.unitPrice} </p></div>
        <div><p>Phone number: ${dataSend.phoneNumber} </p></div>
        <div><p>Người nhận: ${dataSend.Address} </p></div>
        <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường link bên 
        
        dưới để xác nhận và hoàn tất thủ tục mua hàng</p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here!</a>
        <p>Xin chân thành cảm ơn</p>
        </div>`

    }
    if (dataSend.language === 'en') {
        result = `<h3>Dear ${dataSend.customerName}!</h3>
        <p>You received this email because you made an online purchase on<h4>Buti Shoe</h4></h4></p>
        <b>Information order</b>
        <div><p>Receiver: ${dataSend.customerName} </p></div>
        <div><p>Product name: ${dataSend.productName} </p></div>
        <div><p>Quantity: ${dataSend.quantity} </p></div>
        <div><p>Size: ${dataSend.size} </p></div>

        <div><p> Product price: ${dataSend.price} </p></div>
        <div><p>Unit price: ${dataSend.unitPrice} </p></div>
        <div><p>Phone number: ${dataSend.phoneNumber} </p></div>
        <div><p>Address: ${dataSend.Address} </p></div>
        <p>
            If the above information is true, please click on the link below
            below to confirm and complete the purchase procedure
        </p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here!</a>
        <p>Sincerely thank</p>
        </div>`

    }
    return result;
}


module.exports = {
    sendSimpleEmail
}