// import express from 'express';
// import * as dotenv from 'dotenv';
// import OpenAIApi from 'openai';

// dotenv.config();

// const router = express.Router();

// // const config = new Configuration({
// //   apiKey: process.env.OPENAI_API_KEY,
// // });
// const openai = new OpenAIApi({
//   apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
// });
// // const openai = new OpenAIApi(config);

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: "Hello from DALL.E ROUTES" });
// });

// router.route('/').post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const generateImage = async () => {
//       const response = await openai.createImage({
//         prompt: prompt,
//         n: 1,
//         size: "512x512",
//       });

//       return response.data.data[0].url
//     }
//     // const response = await openai.createImage({
//     //   prompt,
//     //   n: 1,
//     //   size: '1024x1024',
//     //   response_format: 'b64_json'
//     // });

//     const image = await generateImage()

//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// });

// export default router;

































import express from 'express';
import * as dotenv from 'dotenv';
import OpenAIApi from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});
router.post('/', async (req, res) => {
// router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const generateImage = async () => {
      const response = await openai.images.generate({
        prompt: prompt,
        n: 1,
        size: "256x256"
       // You might need to adjust this
      });
      // console.log(response)
      return response;
    }

    const image = await generateImage();
    const generatedImageUrl = image.data[0].url
    // console.log(generatedImageUrl)
    res.status(200).json({ imageUrl: generatedImageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;

