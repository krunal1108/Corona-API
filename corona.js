let corona = document.getElementById('corona');


const view = () => {

    fetch('https://data.covid19india.org/data.json').then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.statewise);

        const krunal = data.statewise;

        krunal.forEach(state => {
            corona.innerHTML += `<tr>
            
            <td>${state.active}</td>
            <td>${state.lastupdatedtime}</td>
            <td>${state.confirmed}</td>
            <td>${state.deaths}</td>
            <td>${state.state}</td>
          </tr>`
        });
    }).catch((err) => {
        console.log("Error",err);
    })

}
view();