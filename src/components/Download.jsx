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
            })
            .catch(error =>console.log("Error",error));
    }
    else
    {
        console.error("Link is null");
    }

    
}
export default Download;
