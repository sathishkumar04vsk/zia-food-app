import { Button, Card, CardContent, CardMedia } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import { useContext, useEffect, useRef } from "react";
import { APPContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function FoodCard({ item, fetchFood }) {
  const { token } = useContext(APPContext);
  const navigate = useNavigate();
  const handleDelete = () => {
    try {
      // true , false
      if (confirm(`Are you sure to delete ${item.name}`) == true) {
        fetch(`${import.meta.env.VITE_API_URL}/foods/${item._id}`, {
          method: "DELETE",
          headers:{
            'Authorization': `Bearer ${token}`
          }
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            fetchFood();
          })
          .catch((error) => console.log(error));
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  
  return (
    <Card className=" hover:cursor-pointer hover:shadow-lg !rounded-lg">
      <CardContent>
        <CardMedia
          component="img"
          className="h-56 rounded-md object-fit-cover object-center"
          src={item.image}
          alt={item.name}
        />
        <div className="py-2">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold">{item.restorant_name}</h4>
              <div className="flex gap-1 py-1">
                <StarsIcon className="text-green-700" />
                <p className="font-semibold">{item.rating} </p>
                <strong>{item.expected_delivery_time}</strong>
              </div>
            </div>
            <div className="text-gray-600 font-semibold">
              <p>₹ {item.price}</p>
            </div>
          </div>
          <div className="text-gray-500 font-semibold">
            <p>{item.name} </p>
            <p>{item.location}</p>
          </div>
          <div className="flex justify-between mt-2">
            <Button
              onClick={() => navigate(`/edit/${item._id}`)}
              variant="outlined"
            >
              Edit
            </Button>
            <Button onClick={handleDelete} variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// props itrattration.

// App (parent)=> FoodList (child) => FoodCard (grand child)
