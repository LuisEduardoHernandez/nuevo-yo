let data = []

const form = document.getElementById('form-login');
if (form) {
    const viewData = document.getElementsByClassName('section-form')[0]

    function submitHandler(e) {
        let email = document.getElementsByName('email')[0].value;
        data.push(email)
        e.preventDefault();
        if (data.length > 0) {
            let html = ''
            data.map(data => {
                html = html + '<li style="color: white; text-align: center">'+data+'</li>'
            });
            console.log(html);
            viewData.innerHTML = html
        }
    }

    form.addEventListener("submit", submitHandler);
}

/* register-with-tarjet */
const formWT = document.getElementById('register-with-tarjet');
if (formWT) {
    const viewDataWT = document.getElementsByClassName('card-form')[0]
    const title = document.getElementsByClassName('card-form')[0]
    function submitWT(e) {
        let name = document.getElementsByName('name')[0].value;
        let birth = document.getElementsByName('birth')[0].value;
        let product = document.getElementsByName('product')[0].value;
        let curp = document.getElementsByName('curp')[0].value;
        let cedula = document.getElementsByName('cedula')[0].value;
        let celular = document.getElementsByName('celular')[0].value;
        let email = document.getElementsByName('email')[0].value;
        let target = document.getElementsByName('target')[0].value;
        data.push(name)
        data.push(birth)
        data.push(product)
        data.push(curp)
        data.push(cedula)
        data.push(celular)
        data.push(email)
        data.push(target)
        e.preventDefault();
        if (data.length > 0) {
            let html = '<h3 style="color: black;">Registro Exitoso</h3>'
            data.map(data => {
                html = html + '<li style="color: black; text-align: center">'+data+'</li>'
            });
            console.log(html);
            viewDataWT.innerHTML = html
        }
    }

    formWT.addEventListener("submit", submitWT);
}