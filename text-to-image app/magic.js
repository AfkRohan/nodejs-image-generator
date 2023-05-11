let imgURL;
const url = "https://stablediffusionapi.com/api/v3/text2img";
const args = process.argv;
let prompt='';
console.log(args)
for (let i=2;i<args.length;i++){
    prompt +=" " + args[i];
}
console.log(prompt);
const rqbody = {
    "key": "oDMI3XiBzlBH0gn1QvmaooWJmvslvxhqqt5FTYExuwq9VGN9ZXTkMQK4w1wr",
    "prompt": `${prompt}`,
    "negative_prompt": " ",
    "width": "512",
    "height": "512",
    "samples": "1",
    "num_inference_steps": "20",
    "seed": null,
    "guidance_scale": 7.5,
   "safety_checker":"yes",
    "webhook": null,
    "track_id": null
   };

   fetch('https://stablediffusionapi.com/api/v3/text2img', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(rqbody)
})
   .then(response => response.json())
   .then(response => {
    const imgObj = JSON.parse(JSON.stringify(response));
    imgURL = imgObj.output[0];
    console.log("Image Output: "+imgURL);
});
