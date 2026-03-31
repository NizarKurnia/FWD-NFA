import { index, store, destroy } from "./controller.js";

const main = () => {

    // index();
    store([
        {
            nama: "sebelas",
            umur: 11,
            alamat: "Jalan 11",
            email: "sebelas@email.com"
        },
        {
            nama: "duabelas",
            umur: 12,
            alamat: "Jalan 12",
            email: "duabelas@email.com"
        }]);
    index();
    destroy();
    // index();
}
main();