import React from 'react';
import {WhatsappShareButton, WhatsappIcon,TwitterShareButton,TwitterIcon} from 'react-share';

//Checkout 'react-share'
//to Implement Clipboard Checkout - https://www.geeksforgeeks.org/how-to-copy-text-to-the-clipboard-in-react-js/

function ShareBar({link})
{
    const content = <div>
        <WhatsappShareButton
            url={link}
            quote={'WhatsApp'}
            hashtag="#muo"
        >
            <WhatsappIcon size={20} className={"pt-0.5 pl-1"} round />
        </WhatsappShareButton>
        <TwitterShareButton
            url={link}
            quote={'Twitter'}
            hashtag="#muo"
        >
            <TwitterIcon size={20} className={"pt-0.5 pl-1"} round />
            
        </TwitterShareButton>
    </div>;
    
    return content;
}
export default ShareBar;
