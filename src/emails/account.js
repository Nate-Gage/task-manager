const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

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