var app = new Vue({
    el: '#app',
    estadisiticas:{
    "numberofD": 0,
    "numberofR": 0,
    "numberofI": 0,
    "voteswithD": 0,
    "voteswithR": 0,
    "voteswithI": 0,
    "diezpartyme": [],
    "diezpartyma": [],
    "diezmisseme": [],
    "diezmissema": [],
    }
});
var memberList = [];
var vectordemocrata = [];
var vectorrepublicano = [];
var vectorindependiente = [];
var tablaless = document.getElementById("tablalessmissed");
var tablamost = document.getElementById("tablamostmissed");

fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
    method: "GET",
    headers: new Headers({
        "X-API-Key": 'adZUIoKPgkk0ecKXE0ztm9ErLNJgARlsKHBhTBYa'
    })
}).then(function (response) {
    if (response.ok)
        return response.json();
    throw new Error(response.statusText);
}).then(function (json) {
    console.log(json);
    memberList = json.results[0].members;
    vectordemocrata = memberList.filter(cantidadpartyD);
    vectorrepublicano = memberList.filter(cantidadpartyR);
    vectorindependiente = memberList.filter(cantidadpartyI);
    votoconI = vectorindependiente.map(mapeovotes);
    votoconItotal = votoconI.reduce(suma)
    votoconD = vectordemocrata.map(mapeovotes);
    votoconDtotal = votoconD.reduce(suma);
    votoconR = vectorrepublicano.map(mapeovotes);
    votoconRtotal = votoconR.reduce(suma);
    arraymissedordenadome = memberList.sort(ordenamientomemissed);
    array10missedme = arraymissedordenadome.slice(0, Math.round(arraymissedordenadome.length * 0.1));
    arraymissedordenadoma = memberList.sort(ordenamientomamissed);
    array10missedma = arraymissedordenadoma.slice(0, Math.round(arraymissedordenadoma.length * 0.1));

    allmystats();
    console.log(estadisiticas);
    //mostar elementos
    document.getElementById("republicansenate").innerHTML = "<td>Republican</td><td>" + estadisiticas.numberofR + "</td><td>" + estadisiticas.voteswithR + "</td>";
    document.getElementById("democtratsenate").innerHTML = "<td>Democrat</td><td>" + estadisiticas.numberofD + "</td><td>" + estadisiticas.voteswithD + "</td>";
    document.getElementById("independentsenate").innerHTML = "<td>Independents</td><td>" + estadisiticas.numberofI + "</td><td>" + estadisiticas.voteswithI + "</td>";
    tohtmlme = array10missedme.map(mostrarmissedpct);
    tohtmlme2 = tohtmlme.join("");
    tablaless.innerHTML = tohtmlme2;
    tohtmlma = array10missedma.map(mostrarmissedpct)
    tohtmlma2 = tohtmlma.join(" ");
    tablamost.innerHTML = tohtmlma2;
    
})

function cantidadpartyD(member) {
    return member.party == "D";
}

function cantidadpartyR(member) {
    return member.party == "R";
}

function cantidadpartyI(member) {
    return member.party == "I";
}

function mapeovotes(x) {
    return x.votes_with_party_pct
}

function suma(a, b) {
    return (a + b)
}
function ordenamientomemissed(a, b) {
    return a.missed_votes_pct - b.missed_votes_pct
}

function ordenamientomamissed(a, b) {
    return b.missed_votes_pct - a.missed_votes_pct
}
function mostrarmissedpct(senador) {
    return `<tr>
    <td><a href="${senador.url}" target="_blank">${senador.last_name}, ${senador.first_name} ${senador.middle_name ? senador.middle_name : ''}</a></td>
    <td>${senador.missed_votes}</td>
    <td>${senador.missed_votes_pct}</td>
    </tr>`;
}

function allmystats() {
    estadisiticas.numberofD = vectordemocrata.length;
    estadisiticas.numberofR = vectorrepublicano.length;
    estadisiticas.numberofI = vectorindependiente.length;
    estadisiticas.voteswithD = (votoconDtotal / votoconD.length).toFixed(2);
    estadisiticas.voteswithR = (votoconRtotal / votoconR.length).toFixed(2);
    estadisiticas.voteswithI = (votoconItotal / votoconI.length).toFixed(2);
    estadisiticas.diezmisseme = array10missedme;
    estadisiticas.diezmissema = array10missedma;
}