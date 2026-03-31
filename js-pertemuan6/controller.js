import users from './data.js';

const index = () => {
    users.map((user, index) => {
        console.log(`Index ${index} Nama ${user.nama} Umur ${user.umur} Alamat ${user.alamat} Email ${user.email}`);
    });
}
const store = (userBaru) => {
    users.push(...userBaru)
    console.log(`User berhasil ditambahkan`)
}
const destroy = () => {
    users.pop();
    console.log(`User berhasil dihapus`)
}

export {index, store, destroy};