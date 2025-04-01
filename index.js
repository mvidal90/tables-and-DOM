
const validateQuantity = (element) => {
    const value = element.innerText;
    const valueNumber = parseInt(value);
    // Resolución con styles in line
    // if (valueNumber > 10) {
    //     element.style.background = "#12d112"
    // } else if (valueNumber < 10) {
    //     element.style.background = "#bb1919"
    //     element.style.color = "#FFF"
    // }
    // Resoluciòn con clases
    // if (valueNumber > 10) {
    //     element.className = "cell-green"
    // } else if (valueNumber < 10) {
    //     element.className = "cell-red"
    // }
    if (valueNumber !== 10) {
        element.className = `cell-${ valueNumber > 10 ? "green" : "red" }`
    }
}

const totalElement = document.getElementById("total")
const data = document.getElementsByTagName("tbody")

const dataRows = data[0].rows;

let totalValue = 0;

for (let i = 0; i < dataRows.length - 1; i++) {
    const totalCourses = dataRows[i].lastElementChild.innerText;
    const totalCoursesNumber = parseInt(totalCourses, 10)
    totalValue = totalValue + totalCoursesNumber
}

totalElement.innerText = totalValue

console.log("Total de cursos:", totalElement.innerText)

validateQuantity(totalElement)