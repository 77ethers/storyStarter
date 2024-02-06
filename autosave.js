// Assuming you have an element with the ID 'text' in your HTML
const openAICompletion = async () => {
     const url = "https://hello-world-cold-grass-20f5.77ethers.workers.dev/";

     document.getElementById('text').innerHTML = 'Loading...';
 
     try {
         const response = await fetch(url);
 
         const result = await response.text();
         console.log(result); // Assuming the structure matches the API response
         return result; // Adjust based on actual response structure
     } catch (error) {
         console.error('Error:', error);
         return error; // Provide fallback text
     }
 };
 
 // Correctly handle the async response and update the DOM
 openAICompletion().then((text) => {
     document.getElementById('text').innerHTML = text;
 });
 
 // Autosave functionality
 setInterval(function() {
     localStorage['text'] = document.getElementById('text').innerHTML;
 }, 2 * 1000);
 