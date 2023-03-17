import React from 'react';

const ComingSoon = () => {
    return (
        
<div class="w-full h-screen" style={{ backgroundImage: `url("https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg")` }}>
    <div class="w-full h-screen flex flex-col items-center justify-between bg-black bg-opacity-70 py-8">
        <div class="flex-1 flex flex-col items-center justify-center">
            
            <h1 class="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">Coming Soon</h1>
            <div class="flex flex-col items-center space-y-4 mt-24">
                <p class="text-gray-300 uppercase text-sm">Notify me when it's ready</p>
                <form class="w-full flex items-center">
                    <input type="email" name="email" id="email" class="w-72 p-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded-tl rounded-bl text-sm" placeholder="Email" autocomplete="off"/>
                    <button class="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-gray-100 border border-blue-600 rounded-tr rounded-br text-sm">Subscribe</button>
                </form>
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <ul class="flex items-center space-x-4">
                <li>
                    <a href="/" title="Facebook">
                        
                    </a>
                </li>
                <li>
                    <a href="/" title="Twitter">
                        <svg class="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z" fill="#e2e8f0"></path></svg>
                    </a>
                </li>
                <li>
                    <a href="/" title="LinkedIn">
                        <svg class="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z" fill="#e2e8f0"></path></svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
    );
};

export default ComingSoon;