export default function myInput(){
    let inputArray = ["Username", "date", "email", "password"];
    
    return(
        // inputArray.forEach(function (element) {
        //     <input type={(element)}></input>
        // })

    <input type="date"></input>
    );
}


function RenderInput(type) {

    let input_type = "none"

    switch (type) {
        case "Password":
            input_type = "password"
            break;
        case "E-mail":
            input_type = "email";
            break;
        default:
            input_type = "text"
            break;
    }
    // let myInput = new Input("app", input_type);
    // myInput.render();
}
// inputArrayFiltered.forEach(function (element) {
//     RenderInput(element);
// });

