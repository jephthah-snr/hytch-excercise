const bcrypt = require('bcryptjs');


const encrypt = async () => {
    const salt =await bcrypt.genSalt(7);
    const hashPassword = bcrypt.hash('hello', salt);

    return hashPassword
}

console.log(encrypt())