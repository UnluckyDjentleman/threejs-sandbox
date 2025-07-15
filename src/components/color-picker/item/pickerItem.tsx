import colorStateStore from "../../../store/store"

export default function PickerItem({bg}:{bg:string}){
    const {setActiveColor,color}=colorStateStore()
    return(
        <div style={{width:"40px", height:"40px", borderRadius:"50%", backgroundColor:bg, borderStyle:"solid", borderWidth:"3px"}}
            onClick={()=>{
                setActiveColor(bg)
                console.log(color);
            }}>
        </div>
    )
}