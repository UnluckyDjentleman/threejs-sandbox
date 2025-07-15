import {create} from "zustand"
import { colors } from "../components/color-picker/data/colors";

interface ColorState{
    color:string;
    setActiveColor: (color:string)=>void
}

const colorStateStore=create<ColorState>()((set)=>({
    color:colors[0],
    setActiveColor:(color)=>set({color})
}))

export default colorStateStore;