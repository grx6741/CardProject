import Card from "./Card";

const CardHolderColumns = ({ images }) => {
    return (
        <div className="mx-auto">
            {
                images.map((image, i) =>
                    <div className="p-2" key={i}>
                        <Card image={image} />
                    </div>
                )
            }
        </div>
    );
}

const CardHolder = ({ images }) => {
    const columns_count = 5

    // get roughly number of images per column
    const len = images.length / columns_count;
    const array_of_images = [];

    // put them sequencially in an array
    // Could do it better than just putting them sequentially into an array
    for (var i = 0; i < images.length; i += len) {
        array_of_images.push(images.slice(i, i + len));
        console.log(array_of_images);
    }

    return (
        // Main Container that holds {columns_count} columns of Cards
        <div id="MainContainer" className="bg-white min-h-screen flex flex-row mx-40">
            { array_of_images.map((images, i) => <CardHolderColumns key={i} images={images}/>) }
        </div>
    );
}

export default CardHolder;
