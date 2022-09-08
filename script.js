//validation script
const patterns = {
    telephone: /^\d{11}$/,
    username: /^[\da-z]{5,12}$/,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^[\w-\.]+@[a-zA-Z-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/
}

const inputs = document.querySelectorAll('input');

//validation function
function validate(field,regex){
    const test = regex.test(field.value);
    if(test){
        field.className = 'valid';
    }else {
        field.className = 'invalid';
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', e=>{
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
})

