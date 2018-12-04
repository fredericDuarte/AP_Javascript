let montantChaussure = 100;
let banque = 120;

function Payer(cb) {
    // debiter le montant
    // en cours de validation
    console.log('----> Paiement en cours');
    setTimeout(() => {
        if (montantChaussure <= banque) {
            console.log('---> compte debité');
            banque -= montantChaussure;
            cb(null, 'Paiement accepté');
            // cb (error, success)
        } else {
            console.log('---> TROP CHERE');
            cb('Paiement refusé', null);
        }
    }, 2000);
}

function Send(georges) {
    //envoi de mon colis
    console.log('-----> acheminement en cours');
    setTimeout(() => {
        georges();
    }, 2000);
}

function Livraison() {
    // delivery done
    console.log('----> DELIVERY DONE');
}

Payer(function (error, success) {
    console.log('----> paiement terminé');
    console.log('----> error', error);
    console.log('----> success', success);
    if (success) {
        Send(function () {
            console.log('-----> acheminement terminé');
            Livraison();
        })
    }
})




payerP = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (montantChaussure <= banque) {
                console.log('---> compte debité');
                banque -= montantChaussure;
                resolve('compte debité');
            } else {
                reject('TROP CHERE');
            }
        }, 2000);
    });
}

sendP = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('acheminement done');
        }, 2000);
    })
}


async payer = () => {
    return 'OK COMPTE DEBITE';
}

(async () => {
    let result = await payer();

    await send();
   
})


let tewtP = Promise.all([payerP, sendP]);

tewtP
    .then(result => {
        console.log('-----> result', result);
    })
    .catch(error => {
        console.error(error);
    });



// payerP()
//     .sendP()
//     .then(() => {
//         console.log('---> all is fine');
//         Livraison();
//     })
//     .catch(reason => {
//         console.log('---> reason', reason);
//     })



