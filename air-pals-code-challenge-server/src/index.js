//IMPORT APP
import app from "./app.js";
import { PORT } from "./config.js";

//INITIALIZATE APP
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});