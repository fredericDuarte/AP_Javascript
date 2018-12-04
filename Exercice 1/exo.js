
/*********
 * 
 * 
 ****/
let montantChaussure = 100;
let portefeuille = 180;

function payer(cb) {
    //debiter montant
    console.log('----> VERIFICATION SOLDE');

    setTimeout(() => {

        if (montantChaussure <= portefeuille)
        {
            console.log('----> PAYEMENT VALIDÉ');
            portefeuille -= montantChaussure;
            cb(null, 'paiement accepté');
        } else
        {
            console.log('----> SOLDE INSUFFISANT');
            cb('paiement refusé', null);
        }

    }, 3000);


}


function send(cb) {
    //envoi de mon colis

    setTimeout(() => {

        console.log('----> Acheminement terminé');

        cb();


    }, 2000);
}

function Livraison() {
    //colis livé
    console.log('----> COLIS EXPEDIÉ');
}


payer(function (error, sucess) {
    console.log('-----> paiement terminé');
    console.log('-----> error', error);
    console.log('-----> sucess', sucess);
    if (sucess) {
        send(function () {
            console.log('----> Acheminement en cours');
            Livraison();
        });
    }

}


);



