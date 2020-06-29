const soccer = new Soccer();
const ui = new UI();

document.addEventListener('DOMContentLoaded', getSoccer);

function getSoccer(){
    soccer.getSoccer()
        .then(results => {
            console.log(results);
            ui.populate(results);
            ui.addListeners(results);
        })
        .catch(err => console.log(err));
}
