import Card from "./Card";

const CardHolderColumns = ({ images }) => {
    return (
        <div className="mx-auto">
            {images.map((image, i) => 
                    <div className="p-3" key={i}>
                        <Card image={image} />
                    </div>
                )}
        </div>
    );
}

const CardHolder = ({ images }) => {
    const columns_count = 6

    // get roughly number of images per column
    const len = images.length / columns_count;
    const array_of_images = [];

    // put them sequencially in an array
    // Could do it better than just putting them sequentially into an array
    for (var i = 0; i < images.length; i += len) {
        array_of_images.push(images.slice(i, i + len));
    }

    return (
        // Main Container that holds {columns_count} columns of Cards
        <div id="MainContainer" className="bg-gray-900 min-h-screen m-3 rounded-lg flex flex-row">
            { array_of_images.map((images, i) => <CardHolderColumns key={i} images={images}/>) }
        </div>
    );
}

export default CardHolder;
