console.log("Starting build...");

const sourcePath = "source";
const buildPath = "build";
const fileName = "index.html";

console.log("Clearing build directory");
await Deno.remove(buildPath, { recursive: true });

console.log("Making build directory");
await Deno.mkdir(buildPath);

const decoder = new TextDecoder("utf-8");
const content = decoder.decode(await Deno.readFile(`./${sourcePath}/${fileName}`));

// write new data
const newdata = new TextEncoder().encode(content)
await Deno.writeFile(`./${buildPath}/${fileName}`, newdata);
