module.exports = {
    run: function (client, message, args) {

        if (1) {
            if (1) {
                message.reply(`conductor em HML com o certificado expirado!`).then(message => {
                    message.react('🤔');
                });
                return;
            }
            message.reply(`conductor em HML aparentemente ONLINE!`).then(message => {
                message.react('😁');
            });
        } else {
            message.reply(`conductor em HML aparentemente OFFLINE, o request não deu erro mas StatusCode não é 200!`).then(message => {
                message.react('😢');
            });
        }

    },

    get help() {
        return {
            name: "example",
            description: "Checa status da example",
            usage: `example`,
        };
    },
};
