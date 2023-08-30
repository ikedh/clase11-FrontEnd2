const personal = [
    {
        id:2,
        nombre:"miguel",
    },
    {
        id:1,
        nombre:"Daniel",
    },
    {
        id:22,
        nombre:"Roxana",
    },
    {
        id:4,
        nombre:"Valentina",
    }
]


let datosPersonal = JSON.stringify(personal)

localStorage.setItem("Recursos Humanos",datosPersonal)

console.log(sessionStorage.getItem("Recursos Humanos"))