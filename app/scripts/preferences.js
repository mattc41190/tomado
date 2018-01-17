const fs = require('fs');
const workTimer = document.getElementById("work-timer")
const breakTimer = document.getElementById("break-timer")
const classicTomatoTheme = document.getElementById("classic-tomato")
const themeSelection = document.getElementById("theme-selector")
const lightTheme = document.getElementById("light")
const darkTheme = document.getElementById("dark")
const saveBtn = document.getElementById("save-button")

saveBtn.addEventListener('click', () => {
  let conf = createConfig();
  fs.writeFileSync(`./app/conf.json`, conf)
})

function createConfig() {
  let conf = {
    "work": workTimer.value ||  '25',
    "break": breakTimer.value || '10',
    "theme": themeSelection.value || 'classic-tomato'
  }

  return JSON.stringify(conf);
}
