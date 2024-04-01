const title = document.getElementById('title');
const user_profile = document.querySelector('.user-profile');


const user = {
    name: 'Ricardo Alberto Alfredo'
}



console.log(user_profile);

// user_profile.innerHTML = 'ui'

user_profile.innerHTML = `${(user.name.split(' ')[0][0])}  ${(user.name.split(' ')[user.name.split(' ').length -1][0])}`

const buttons = Array.from(document.getElementsByTagName('a'));

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button);
    });


});