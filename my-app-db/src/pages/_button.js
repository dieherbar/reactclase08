
export default function MyButton() {
    function saluda(){
        alert("Somos " + Date());
      }
    return (
        <button onClick={saluda}> Soy un boton con la fecha!</button>
    );
  }
  