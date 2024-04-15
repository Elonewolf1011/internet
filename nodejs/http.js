//client side js

let nameElement = document.querySelector('.name');
let surnameElement = document.querySelector('.surname')

const getMyname = async () =>{
    let res = await fetch('https://127.0.0.1:3000/')
    console.log(res);
    if (!res.ok) {
        alert('failed to get name');
        return;
    }
    let name = await res.text();
    nameElement.textContent = name;
}


const postsurname = async () => {
    let res = await fetch('https://127.0.0.1:3000/',{
        method: 'post',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({surname:'kumar'})
    })
    console.log(res);
    if(!res.ok) {
        alert('failed to post surname');
        return;
    }
    let { surname } = await res.json();
    surnameElement.textContent = surname;
}