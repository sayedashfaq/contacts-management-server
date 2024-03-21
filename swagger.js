import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Society API",
    description: "Social Media Api",
  },
  host: "localhost:5000",
  schemes: ["http", "https"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/*.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("Swagger documentation generated successfully.");
});
