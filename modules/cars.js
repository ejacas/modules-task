const ul = document.querySelector("ul")
const cars = ["BMW", "VW", "AUDI", "MB"]

const loadCars = (app) => {


    cars.forEach(car => {
        const li = document.createElement("li")
        li.textContent = car
        ul.append(li)
    })
}

export default loadCars