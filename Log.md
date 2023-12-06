# Notes for the other user

## Gowrish Day 1

- Comments
    - Created a Components dir and moved Card.js into that dir
    - Created a Card Holder component which has many columns of cards
        - Each Column is itself a component
        - Each column compoennt is a flex component

- TODO
    - (MANDATORY) Abstract the image inside the card into its own component where you pass a url to it as a prop
        and based on the url it will display either image or gif or video

    - (MANDATORY) Better COLOR Scheme and figure out how switch between light and dark theme

    - (OPTIONAL) When hovered over a card, each card grows with respect to its size. So each card grows in its 
        own rate. idk how to fix this ;) Maybe put the scale in terms of pixels instead of percent

    - (OPTIONAL) Maybe improve the splitting of the large image array into smaller image array based on their
        height. like if an array has a image with big height then put the smaller ones with it, so
        that all columns have almost same height. Now if you scroll down the website, you'll see
        what i mean

- NOTES
    - If the image is low res, its not scaling up. for example see the gif that i put.
    - The images that i put are high res ;) so it will take some time to render the first time.
