import React from 'react'

const Ninjas = ({ninjas, iClick, deleteNinja}) => {


  // const ninjaList = ninjas.map(ninja => {
   
  //   if (ninja.age > 20){ 

  //   return (

  //     <div className="ninja" key={ninja.id}>
  //       <div>Name: { ninja.name }</div>
  //       <div>Age: { ninja.age }</div>
  //       <div>Belt: { ninja.belt }</div>
  //     </div>
  //   )
  // } else 
  //   return null;

  // });
  
    /** container_component / class based compoent containes state
   *          has Render method
   *          automatically attaches to the instance of them by using this.propos
   * 
   * function_component: primarily concerend with UI with stateless
   *           no Render method
   *           pass props as a Parameter to them by using props, then asigine it ot a new object variable            
   */
  return (
    <div className="ninja-list">
      { 
      
          ninjas.map(ninja =>{  
            // return ninja.age > 20 ? () : null;
            return ninja.age > 0 ? ( 
                <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete </button>
                <button onClick={() => {iClick()} }>  copy me </button>
                
              </div>
              
            ) : null;
       
        })
       }
    </div>
  );

}

export default Ninjas