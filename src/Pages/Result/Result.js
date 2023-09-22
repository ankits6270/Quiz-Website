import { Button } from "@mui/material"; // Import Button from @mui/material
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={() => navigate("/")} // Use onClick to navigate
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
