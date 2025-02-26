const mailer=require('nodemailer')
const transport=mailer.createTransport({
    host:'smtp.gmail.com',
    secure:false,
    port:587,
    auth:{
        user:'shaikrizu1019@gmail.com',
        pass:'pqea mibz ctxn pqtq'
    }
})

let mailoptions={
    from:'shaikrizu1019@gmail.com',
    to:'bhargavigaripalli@gmail.com',
    subject:"Offer Letter for Software Developer",
    text:"Hi Bhargavi",
    html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3 style="color: crimson">Hello Bhargavi Garikapalli!!...</h3>
    <p>
      Please review the attached offer letter for further details regarding your
      employment terms and conditions. To confirm your acceptance, kindly sign
      and return a scanned copy of the letter by **[Response Deadline]**. We are
      excited to have you join us and look forward to working with you. If you
      have any questions, feel free to reach out at [Contact Email/Phone].
    </p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaljM0RzoKmuYM2Uf9B2TvaxUwXSYuxkfXAQ&s">
</body>
</html>`,

attachments:[{
    filename:'sample.txt',
    path:'./Mail/sample.txt'
}]

}

transport.sendMail(mailoptions,(err,info)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(info)
    }
})