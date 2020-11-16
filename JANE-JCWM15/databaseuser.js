let dataUser = [
    {
        nomor : 1,
        uname : 'alee',
        email : 'alee@gmail.com',
        role : 'admin',
    },
    {
        nomor : 2,
        uname : 'jennie',
        email : 'jenniebp@gmail.com',
        role : 'user',
    },
    {
        nomor : 3,
        uname : 'elsa',
        email : 'elsa@disney.com',
        role : 'user',
    },
]

let formUser = []

class User {
    constructor(nomor, uname, email, role) {
        this.nomor = nomor,
        this.uname = uname,
        this.email = email,
        this.role = role
    }
}

function showUser (idx) {
    let table = document.getElementById('daftaruser')
    let tbody = table.getElementsByTagName('tbody')[0]

    let tr = ""

    // LOOPING UNTUK DAPET DATA SATU SATU
    for (let i = 0; i < dataUser.length; i++) {
        if (idx === i) {
            tr += `<tr>
                <td></td>
                <td>
                    <input type="text" id="unamebaru" value=${dataUser.uname}></td>
                <td>
                    <input type="email" id="emailbaru" value=${dataUser.email}></td>
                <td>
                    <select id="rolebaru">
                    <option>user</option>
                    <option>admin</option>
                    </select></td>
                <td>
                    <button onclick="OnBtnSave(${i})">SAVE</button>
                    <button onclick="OnBtnCancel(${i})">CANCEL</button>
                </td>
            </tr>`
        } else {
            tr += `<tr>
                    <td>${i + 1}</td>
                    <td>${dataUser[i].uname}</td>
                    <td>${dataUser[i].email}</td>
                    <td>${dataUser[i].role}</td>
                    <td>
                        <button onclick="OnBtnEdit(${i})">EDIT</button>
                        <button onclick="OnBtnDel(${i})">DELETE</button>
                    </td>
                </tr>`
        }
    }
    tbody.innerHTML = tr
}
showUser()

function OnBtnAdd (event) {
    event.preventDefault()
    console.log('add button di klik')

    let form = document.getElementById('userbaru')
    let select = document.getElementById('pilihRole')
    console.log('form', form)
    console.log(form["uname"].value)

    let unama = form["uname"].value
    let email = form["email"].value
    let role = select.value
    console.log('rolenya', role)

    if (unama === "" || email === "" || role === "" ) {
        alert("INPUT TIDAK BOLEH KOSONG")
    } else {
        dataUser.push(new User (
            dataUser.length + 1,
            form["uname"].value,
            form["email"].value,
            select.value
        ))
        console.log(dataUser)
        // tampilkan ulang user
        showUser()

        // RESET VALUE DI FORM BIAR TIAP ABIS DI KLIK ADD ILANG
        form["uname"].value = ''
        form["email"].value = ''
        select.value = ''
        
    }
    
}

function OnBtnEdit (index) {
    console.log(`button edit ke ${index} di klik`)

    showUser(index)
}

function OnBtnDel (index) {
    console.log(`button delete ke ${index} di klik`)

    dataUser.splice(index, 1)
    showUser()
}

function OnBtnSave (index) {
    console.log('save di klik')

    let unameBaru = document.getElementById('unamebaru').value
    let emailBaru = document.getElementById('emailbaru').value
    let roleBaru = document.getElementById('rolebaru').value
    console.log(unameBaru)
    console.log(emailBaru)
    console.log(roleBaru)

    // EDIT DAFTAR PRODUK DENGAN VALUE YG BARU
        dataUser[index].uname = unameBaru
        dataUser[index].email = emailBaru
        dataUser[index].role = roleBaru

        showUser()
}

function OnBtnCancel (index) {
    console.log('button cancel di klik')

        // tampilkan ulang produkya
        showUser()
}

