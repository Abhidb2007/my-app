import "./App.css";
function App(){
  return(
    <div>
      <PostComponent/>
    </div>
  )
}
const style={width:200,backgroundColor:"pink",paddding:"50px",borderRadius:"5px Solid Block",borderColor:"black"}
function PostComponent(){
  return(
    <div style={style}>
      <img src={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRys3EE_iaBjNvT1ybIeGvK3ofEU2PRXCb7SI8M2Q_tkGvXeSqAflEwlBKlhvHbTz9NiZsPEP8j_YMCXevva_zNGA"} style={{
        width:100,
        height:100,
        borderRadius:40
      }}/>

    </div>
  )

}
export default App;