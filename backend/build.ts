console.log("Starting build...");

const sourcePath = "source";
const fileName = "index.html";

const decoder = new TextDecoder("utf-8");
const content = decoder.decode(await Deno.readFile(`./${sourcePath}/${fileName}`));

// sets new data
console.log("Content: " + content);

// write new data
const newdata = new TextEncoder().encode(content)
await Deno.writeFile(`./${sourcePath}/${fileName}`, newdata);

const data = await Deno.readFile(`./${sourcePath}/${fileName}`);
console.log(decoder.decode(data));