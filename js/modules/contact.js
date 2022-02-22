function contact() {

    const form = document.querySelector('form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let  telegram_bot_id = "5243118463:AAGuCr1mfCqEFmyAUZMNn34zVM-RBldFefM";

    let chat_id = 1652305676;
    let u_name, email, message;
    let ready = function () {
        u_name = document.querySelector("#name").value;
        email = document.querySelector("#email").value;
        message = document.querySelector("#message").value;
        message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message;
    };
    let sendtelegram = function () {
        ready();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            "data": JSON.stringify({
                "chat_id": chat_id,
                "text": message
            })
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#message").value = "";
        return false;
    };
    sendtelegram()

    })

    
}

module.exports = contact;

