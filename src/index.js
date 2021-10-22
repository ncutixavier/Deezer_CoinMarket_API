import express from "express"
import bodyParser from "body-parser"
import SwaggerUiOptions from "swagger-ui-express"
import swaggerDocument from '../swagger.json'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome!"
    })
});

app.use('/api-docs', SwaggerUiOptions.serve, SwaggerUiOptions.setup(swaggerDocument));

const PORT = process.env.PORT || 8005;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

export default app
