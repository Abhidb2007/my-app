function App(){
  return(
    <div style={{background:"grey",height:"100vh",width:"100vh" }}>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
        <div>
          <PostComponent/>
        </div>  
        <div>
          <PostComponent/>
          <br/>
        </div>
        <div>
          <PostComponent/>
          <br/>
        </div>  
        </div>
      </div>
    </div>
  )
}
const style={width:200,backgroundColor:"pink",borderRadius:10,borderColor:"black",borderWidth:1,display:"flex"}
function PostComponent(){
  return<div style={style}>
    <div style={{display:"flex"}}>
      <img src={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRys3EE_iaBjNvT1ybIeGvK3ofEU2PRXCb7SI8M2Q_tkGvXeSqAflEwlBKlhvHbTz9NiZsPEP8j_YMCXevva_zNGA"} style={{
        width:40,
        height:40,
        borderRadius:20
      }}/>
      <div style={{fontSize:12,marginLeft:10}}>
        <b>
          name
        </b>
      
      <div>1200 followers</div>
      <div>12m</div>
      <div style={{display:"flex",marginLeft:6}}>
      
        <img src={"https://m.media-amazon.com/images/I/81nUFx9sXoL.jpg"} style={{width:10,height:10}}>
        </img>

      </div>
      </div>
      <div style={{fontsize:12}}>
        i iam abhi
      </div>
    </div>  



</div>
}
const Greeting=({name})=>{
  return<h1>hello, {name}!</h1>;
};
export default App;