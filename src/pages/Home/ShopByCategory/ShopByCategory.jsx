import { useEffect, useState } from 'react';
import '../ShopByCategory/ShopCategory.css'
const ShopByCategory = () => {

  const [activeTab,setActiveTab]=useState("Marvel");




  useEffect(()=>{
    fetch(`http://localhost:5000/categories/${activeTab}`)
    .then((res)=>res.json())
    .then((data)=>console.log(data))
  },[activeTab])



  const handleTabControl=(tab)=>{
    setActiveTab(tab);
  }
  return (
    <div>
      <div>
        <h1 className="text-center my-20 text-5xl">Shop By Category</h1>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 w-1/2  mx-auto gap-9 text-2xl ">
        <div className={`${activeTab==="Marvel"?" same":""}`} onClick={()=>handleTabControl("Marvel")}>
          <button >Marvel</button>
        </div>
        <div className={`${activeTab==="Dc"?" same":""}`} onClick={()=>handleTabControl("Dc")}>
          <button>Dc</button>
        </div>
        <div className={`${activeTab==="Transformers"?" same":""}`}  onClick={()=>handleTabControl("Transformers")}>
          <button>Transformers</button>
        </div>
      </div>




      




    </div>
  );
};

export default ShopByCategory;
