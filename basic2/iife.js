(function chai () {
    //named iife
    console.log(`DB Connected`);
}
) ();

( (name) => {
    console.log(`DB connected two ${name}`);
})("mufeez")