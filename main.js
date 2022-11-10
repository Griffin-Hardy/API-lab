const residentBtn = document.querySelector('button')
const section = document.querySelector('section')
const baseURL = "https://swapi.dev/api"
const btnClick = () => {
    axios.get(`${baseURL}/planets/?search=Alderaan`)
        .then(res => {
            let people = res.data.results[0].residents
            for(let i = 0; i < people.length; i++){
                console.log(people[i])
                axios.get(people[i])
                .then(res => {
                    let myH2 = document.createElement('h2')
                    myH2.textContent = res.data.name
                    section.appendChild(myH2)
                    console.log(res.data)
                })
            }
        })
}

residentBtn.addEventListener('click', btnClick)