import { colors } from "./data/colors";
import PickerItem from "./item/pickerItem";

export default function ColorPicker(){
    return(
        <div style={{display:"flex",flexWrap:"wrap",position:"absolute",zIndex:2, top:0}}>
            {
                colors.map(el=>(
                    <PickerItem bg={el}/>
                ))
            }
        </div>
    )
}