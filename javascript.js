// before and after picture slider
const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})

// generate prompt
var word = [
    "Angular","Ash","Bait","Blind","Bones","Build","Cave","Chains","Connect","Contract","Crispy",
    "Crooked","Cute","Dark","Deep","Dragon","Enchanted","Extinct","Fall","Fantasy","Field","Fight",
    "Filthy","Flame","Found","Frail","Freeze","Furious","Fuzzy","Glass","Globe","Gloomy","Hair",
    "Helmet","Horns","Husky","Juicy","Legend","Mask","Medieval","Mindless","Misfit","Mist",
    "Nausea","Necromancy","Ornament","Overgrown","Pattern","Poison","Power","Pressure",
    "Ring","Risk","Run","Salute","Scorched","Self","Ship","Slice","Slither","Snow","Sour",
    "Spirit","Swing","Sword","Technology","Thunder","Trail","Tranquil","Underwater",
    "United","Vengeance","Warrior","Weak","Weapon","Wild","Wired",
];
function generate(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// display prompt
window.onload = function display_prompt(event) {
    event.preventDefault();
    let displayprompt = document.querySelector("#generated-prompt");
    displayprompt.innerHTML = generate(word);
}

// regenerate prompt on button press
function regenerate(event) {
    event.preventDefault();
    let displayRegenerate = document.querySelector("#generated-prompt");
    displayRegenerate.innerHTML = generate(word);
}
let regenerate_button = document.querySelector("#generate-button");
regenerate_button.addEventListener("click", regenerate);


// copy prompt button - change button to say `copied` and revert back
const copy_button = document.querySelector("#copy-button");
copy_button.addEventListener("click", function() {
    let showCopied = document.querySelector("#copy-button");
    showCopied.innerHTML = `Copied!`;
    const myTimeout = setTimeout(revert, 800);
    function revert() {
        let revertCopy = document.querySelector("#copy-button");
        revertCopy.innerHTML = `Copy`
    }
})

// copy button
function copyToClipboard() {
    const str = document.getElementById('generated-prompt').innerText
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}
copy_button.addEventListener("click", copyToClipboard)

// open email envelope on click and revert back
const email = document.querySelector("#email");
email.addEventListener("click", function() {
    let showCopied = document.querySelector("#email");
    showCopied.innerHTML = `<i class="fa-solid fa-envelope-open"></i>
    My Email: knh.nguyen2002@gmail.com`;
    const myTimeout = setTimeout(revert, 800);
    function revert() {
        let revertCopy = document.querySelector("#email");
        revertCopy.innerHTML = `<i class="fa-solid fa-envelope"></i>
        My Email: knh.nguyen2002@gmail.com`
    }
})
