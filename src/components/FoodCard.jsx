import { Button, Card, CardContent, CardMedia } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import { useContext } from "react";
import { APPContext } from "../App";

export default function FoodCard  ({item}){
    const {setFoodDatas} = useContext(APPContext);
    const handleDelete = () => {
            setFoodDatas(prev =>prev.filter((data)=>data.id !=item.id))
    }
    return <Card className=" hover:cursor-pointer hover:shadow-lg !rounded-lg">
                        <CardContent>
                            <CardMedia component="img" className="h-56 rounded-md object-fit-cover object-center" src={item.food_image} alt={item.food_name} />
                            <div className="py-2">
                                <h4 className="text-xl font-bold">{item.restorant_name}</h4>
                                <div className="flex gap-1 py-1">
                                    <StarsIcon className="text-green-700"/>
                                    <p className="font-semibold">{item.rating} </p>
                                    <strong>{item.expected_delivery}</strong>
                                </div>
                                <div className="text-gray-500 font-semibold">
                                    <p>{item.food_name} </p>
                                    <p>{item.location}</p>
                                </div>
                                <div className="flex justify-end mt-2"><Button onClick={handleDelete} variant="contained" color="error"  >Delete</Button></div>
                            </div>
                        </CardContent>
                </Card>
}

// props itrattration.

// App (parent)=> FoodList (child) => FoodCard (grand child)