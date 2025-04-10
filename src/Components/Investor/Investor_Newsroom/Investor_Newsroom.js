import React from "react";
import { Card } from "react-bootstrap";
import { BookOpen } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Investor_Newsroom.css";

const data = Array(6).fill({
  title: "Lorem ipsum dolor sit amet, consectetur...",
  date: "01 Jan 2021",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id velit ullamcorper, sodales sit amet, venenatis tortor. Aliquam venenatis tincidunt eros.",
});

const Investor_Newsroom = () => {
  return (
    <div className="container py-4">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-12 col-md-6 mb-4">
            <Card className="custom-card">
              <div className="icon-container">
                <BookOpen className="icon" size={24} />
              </div>
              <div>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-date">{item.date} | Lorem ipsum dolor</p>
                <p className="card-description">{item.description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investor_Newsroom;
