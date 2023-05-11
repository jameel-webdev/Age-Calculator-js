const btnElement = document.getElementById('btn')
const birthDate = document.getElementById('birthdate')
let result = document.getElementById('result');

function calculateAge(){
    const birthDateValue = birthDate.value;
    if(birthDateValue === ''){
        alert("Select Your Date of Birth");
    }else{
        const age = getAge(birthDateValue);
        result.innerText = `You are ${age} ${age > 1 ? "years":"year"} old`;
    }
}

function getAge(birthDate){
    const currentDate = new Date();
    const birthYear = new Date(birthDate);
    let age = currentDate.getFullYear() - birthYear.getFullYear();
    const month = currentDate.getMonth() - birthYear.getMonth();
    if(month<0 || month === 0 && currentDate.getDate() < birthYear.getDate()){
        age--
    } 
    return age;
}

btnElement.addEventListener('click',calculateAge)