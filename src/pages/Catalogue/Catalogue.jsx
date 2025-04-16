import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Catalogue.scss";
import { Card, CardContent, CardMedia, Grid, Paper } from "@mui/material";

const Catalogue = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.153:8080/design/catalogue")
      .then((response) => {
        setCategories(response.data);
        console.log("categories", response.data);
      })
      .catch((error) => console.error("Error fetching catalogue:", error));
  }, []);

  const handleCardClick = (catalogueId) => {
    navigate(`/catalogue/designDashboard?catalogueId=${catalogueId}`);
  };

  return (
    <Grid container spacing={2} style={{ padding: "20px" }}>
      {categories.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>
          <Paper elevation={3} style={{ borderRadius: "10px"}}>
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => handleCardClick(item.id)}
            >
              <CardMedia
                className="catalogue-image"
                component="img"
                image={`/assets/images/category/${item.coverImg}.jpg`}
                alt={item.title}
              />
              <CardContent className="catalogue-content">
                <h3>{item.title}</h3>
                <p className="description">{item.description}</p>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Catalogue;
