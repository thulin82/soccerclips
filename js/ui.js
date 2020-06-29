class UI {

    populate(soccer) {
        let output = '';
        let id = 0;

        soccer.soccer.forEach(element => {
            let flag = ui.getFlag(element.competition.name);
            console.log(flag);
            output += `
            <div class="row">
                <div class="col-md-6 mx-auto text-center bg-light mt-5 p-5 rounded" id="${id}">
                    <h1 class="text-dark" id="w-title">${element.title}</h1>
                    <h3 class="text-dark" id="w-desc"><img src="img/${flag.toLowerCase()}.png" height="25px" width="25px"> ${element.competition.name}</h3>
                    <h3 class="text-dark" id="w-other">${new Date(element.date).toLocaleString("sv-SE")}</h3>
                    <div class="embedded" id="div-${id}" style="display: none">${element.embed}</div>
                </div>
            </div>
            `;
            id++;
        });

        document.getElementById('container').innerHTML = output;
            
    }

    getFlag(competitionName) {
        return competitionName.split(':')[0];
    }

    addListeners(results) {
        for (const key in results.soccer) {
            document.getElementById(key).addEventListener('click', function() {
                ui.extend(key);
            });
        }
    }

    extend(key) {
        const div = document.getElementById(`div-${key}`);
        div.style.display = div.style.display === 'none' ? 'block' : 'none';
    }
}
