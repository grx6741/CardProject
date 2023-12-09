

//Currently Gifs and Images are supported
//But from reading it seams that you need fetch video byte by byte and need server end scripting to efficiently download
//If Cors is allowed we can download most small videos and games as well
//Checkout this thread : https://stackoverflow.com/questions/71829361/how-to-download-mp4-video-in-js-react
function Download(name,link)
{
    const a = document.createElement('a');
    a.download = name.toString();

    console.log(link);
    if(link != null && link != ""){
        fetch(link)
            .then((response) => response.blob())
            .then((myBlob) => {
                const objectURL = URL.createObjectURL(myBlob);
                a.href = objectURL;
                a.click();
                URL.revokeObjectURL(objectURL);
            })
            .catch(error =>console.log("Error",error));
    }
    else
    {
        console.error("Link is null");
    }

    
}
export default Download;
