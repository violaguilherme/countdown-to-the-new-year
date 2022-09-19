const nextYearContainer = document.getElementById("year")
const daysContainer = document.getElementById("days")
const hoursContainer = document.getElementById("hours")
const minutesContainer = document.getElementById("minutes")
const secondsContainer = document.getElementById("seconds")
const spinnerLoading = document.getElementById("loading")
const countdownContainer = document.getElementById("countdown")

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? "0" + unit : unit

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    daysContainer.textContent = getTimeUnit(days)
    hoursContainer.textContent = getTimeUnit(hours)
    minutesContainer.textContent = getTimeUnit(minutes)
    secondsContainer.textContent = getTimeUnit(seconds) 
}

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    insertCountdownValues({ days, hours, minutes, seconds })
}

const handleCountdownDisplay = () => {
    spinnerLoading.remove()
    countdownContainer.style.display = "flex"
} 

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000)