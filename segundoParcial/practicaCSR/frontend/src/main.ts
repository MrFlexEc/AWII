import './style.css'
import axios from 'axios'
import { IResMantenimiento, Mantenimiento } from './interfaces/IMantenimiento';
const httpAxios =  axios.create({
  baseURL:'http://localhost:2500/v1/inventory/api/',
})



const app = document.querySelector<HTMLDivElement>('#app')!
//#region mapa de elementos
const etiqueta = document.createElement("label")
etiqueta.textContent="ID"
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `</br></br>
<label for ="idVehiculo">Id Vehiculo</label><input id="idVehiculo"/> </br></br>
<label for ="idConcepto">Id Concepto</label><input id="idConcepto"/> </br></br>
<label for ="fechaMantenimiento">Fecha mantenimiento</label><input id="fechaMantenimiento"/> </br></br>
<label for ="detalle">Detalle</label><input id="detalle"/> </br> </br>
<label for ="precio">Precio</label><input id="Precio"/> </br></br>
<button id="new" >New</button> 
<button id="save" >Save</button>
<button id="query" >Query</button>
<div id="body"/>
`
const newb = document.querySelector<HTMLButtonElement>('#new')!
const save = document.querySelector<HTMLButtonElement>('#save')!
const query = document.querySelector<HTMLButtonElement>('#query')!

const id = document.querySelector<HTMLInputElement>('#id')!
const idVehiculo = document.querySelector<HTMLInputElement>('#idVehiculo')!



const status = document.querySelector<HTMLInputElement>('#status')!
const idConcepto = document.querySelector<HTMLInputElement>('#idConcepto')!
const fechaMantenimiento = document.querySelector<HTMLInputElement>('#fechaMantenimiento')!
const detalle = document.querySelector<HTMLInputElement>('#detalle')!
const precio = document.querySelector<HTMLInputElement>('#precio')!
const stock = document.querySelector<HTMLInputElement>('#stock')!
const body = document.querySelector<HTMLDivElement>('#body')!
//#endregion


newb.addEventListener('click',()=>{
  idVehiculo.value=""
  idConcepto.value=""
  fechaMantenimiento.value=""
  detalle.value=""
  precio.value=""
  id.value=""
})
query.addEventListener('click', async ()=>{
  const respmantenimiento:IResMantenimiento 
  =  await (await httpAxios.get<IResMantenimiento>('mantenimiento')).data;

    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"


    const { mantenimientos } = respmantenimiento;

    for (const mantenimiento of mantenimientos)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${mantenimiento._id}" >${mantenimiento.idVehiculo}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${mantenimiento.idConcepto}`
    }
    body.innerHTML=``
    body.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const mantenimiento:Mantenimiento 
          =  await (await httpAxios.get<Mantenimiento>(`products/${idx}`)).data;
          idVehiculo.value= mantenimiento.idVehiculo;          
          idConcepto.value= mantenimiento.idConcepto;  
          fechaMantenimiento.value= mantenimiento.fechaMantenimiento;  
          detalle.value= mantenimiento.detalle;  
          precio.value = mantenimiento.precio.toString();
          id.value= mantenimiento._id!;  
           
      })
    })

  

    

  

})
save.addEventListener('click',async ()=>{
  const data:Mantenimiento = {
    idVehiculo: idVehiculo.value,
    idConcepto: idConcepto.value,
    precio: Number(precio.value),
    detalle: detalle.value,
    fechaMantenimiento: fechaMantenimiento.value,
    minimum: 0
  }
  // console.log(data);

  if (id.value.trim().length>0 )
  {
    //        
    const resp: Mantenimiento = await (await httpAxios.put<Mantenimiento>(`mantenimientos/${id.value}`, data)).data
    console.log(resp)
    console.log(`El mantenimiento al vehiculo ${resp.idVehiculo} fue modificado con éxito`);
    
    return;
  }
  try {
    const resp: Mantenimiento =  await (await httpAxios.post<Mantenimiento>(`mantenimientos`, data)).data
    console.log(`El mantenimiento del id del vehiculo ${resp.idVehiculo} fue grabado con éxito`);
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
      
    }
    
  }
  
  
})