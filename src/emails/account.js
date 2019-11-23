const sgMail = require('@sendgrid/mail')

//Conventional to name environment variables with caps and underscores
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nate.d.gage@gmail.com',
        subject: 'Thanks for joining the Task Manager App',
        text: `Welcome to the App, ${name}. Let me know you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nate.d.gage@gmail.com',
        subject: 'Sorry to see you leave',
        text: `Hi ${name}, we're sorry to see you go. Let us know if we can do anything to make your future experience better.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}