<script lang="ts">
    import { draw, fade } from 'svelte/transition';
	import Chat from '../chat.svelte'
	import Header from '../header.svelte'
    import { onMount } from 'svelte';

    let onload = false

    onMount(() => {
        onload = true
    })

const cards = [
    { value: 1, link: '/cards/AD.svg' },
    { value: 2, link: '/cards/2D.svg' },
    { value: 3, link: '/cards/3D.svg' },
    { value: 4, link: '/cards/4D.svg' },
    { value: 5, link: '/cards/5D.svg' },
    { value: 6, link: '/cards/6D.svg' },
    { value: 7, link: '/cards/7D.svg' },
    { value: 8, link: '/cards/8D.svg' },
    { value: 9, link: '/cards/9D.svg' },
    { value: 10, link: '/cards/TD.svg' },
    { value: 10, link: '/cards/JD.svg' },
    { value: 10, link: '/cards/QD.svg' },
    { value: 10, link: '/cards/KD.svg' },
    { value: 1, link: '/cards/AH.svg' },
    { value: 2, link: '/cards/2H.svg' },
    { value: 3, link: '/cards/3H.svg' },
    { value: 4, link: '/cards/4H.svg' },
    { value: 5, link: '/cards/5H.svg' },
    { value: 6, link: '/cards/6H.svg' },
    { value: 7, link: '/cards/7H.svg' },
    { value: 8, link: '/cards/8H.svg' },
    { value: 9, link: '/cards/9H.svg' },
    { value: 10, link: '/cards/TH.svg' },
    { value: 10, link: '/cards/JH.svg' },
    { value: 10, link: '/cards/QH.svg' },
    { value: 10, link: '/cards/KH.svg' },
    { value: 1, link: '/cards/AS.svg' },
    { value: 2, link: '/cards/2S.svg' },
    { value: 3, link: '/cards/3S.svg' },
    { value: 4, link: '/cards/4S.svg' },
    { value: 5, link: '/cards/5S.svg' },
    { value: 6, link: '/cards/6S.svg' },
    { value: 7, link: '/cards/7S.svg' },
    { value: 8, link: '/cards/8S.svg' },
    { value: 9, link: '/cards/9S.svg' },
    { value: 10, link: '/cards/TS.svg' },
    { value: 10, link: '/cards/JS.svg' },
    { value: 10, link: '/cards/QS.svg' },
    { value: 10, link: '/cards/KS.svg' },
    { value: 1, link: '/cards/AC.svg' },
    { value: 2, link: '/cards/2C.svg' },
    { value: 3, link: '/cards/3C.svg' },
    { value: 4, link: '/cards/4C.svg' },
    { value: 5, link: '/cards/5C.svg' },
    { value: 6, link: '/cards/6C.svg' },
    { value: 7, link: '/cards/7C.svg' },
    { value: 8, link: '/cards/8C.svg' },
    { value: 9, link: '/cards/9C.svg' },
    { value: 10, link: '/cards/TC.svg' },
    { value: 10, link: '/cards/JC.svg' },
    { value: 10, link: '/cards/QC.svg' },
    { value: 10, link: '/cards/KC.svg' },
    { value: 0, link: '/cards/1B.svg' },
]
    let Card = null
    let CardValue = null
    let RandomCard = null

    let DealerCards = []
    let DealerValue = []

    let PlayerCards = []
    let PlayerValue = []

    let SumPlayerValue = 0
    let SumDealerValue = 0

    let HvilketKort = 2
    let HvorSkalKortet = 10

function carddraw(){
    PlayerValue = []
    SumPlayerValue = 0
        for (let i = 0; i < 2; i++){
            RandomCard = Math.round(Math.random() * 51)
            Card = cards[RandomCard].link
            CardValue = cards[RandomCard].value
            PlayerCards = [Card, ...PlayerCards]
            PlayerValue = [...PlayerValue, CardValue]    
        }

    for (let j = 0; j < PlayerValue.length; j++) {
            SumPlayerValue += PlayerValue[j];
            }

    DealerValue = []
    SumDealerValue = 0

        for (let i = 0; i < 2; i++){
            RandomCard = Math.round(Math.random() * 51)
            Card = cards[RandomCard].link
            CardValue = cards[RandomCard].value
            DealerCards = [Card, ...DealerCards]
            DealerValue = [...DealerValue, CardValue]
        }

    for (let j = 0; j < DealerValue.length; j++) {
            SumDealerValue += DealerValue[j];
            }
        
    console.log(PlayerValue)
    console.log(PlayerCards)
    console.log(SumPlayerValue)
}
    
function PlayerHit(){
    RandomCard = Math.round(Math.random() * 51)
    Card = cards[RandomCard].link
    CardValue = cards[RandomCard].value
    PlayerCards = [...PlayerCards, Card]
    PlayerValue = [...PlayerValue, CardValue]  
    SumPlayerValue = SumPlayerValue + PlayerValue[HvilketKort]

    MakeImage()
}

function MakeImage(){
    console.log('Current HvorSkalKortet:', HvorSkalKortet)
    let SpillerKort = document.getElementById('SpillerKort')
    let nyttkort = document.createElement('img')
    nyttkort.src = PlayerCards[HvilketKort]
    nyttkort.classList.add('h-[11rem]', 'absolute', 'rem', 'z-10')
    nyttkort.style.left = HvorSkalKortet + 'rem'
    SpillerKort.appendChild(nyttkort);
    HvorSkalKortet = HvorSkalKortet + 5
    HvilketKort = HvilketKort + 1

}
</script>

<div class="flex justify-between h-screen w-screen bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
    <div class="flex flex-col items-center justify-center h-screen w-[calc(100%-20.625rem)]">
        <Header/>
        <div class=" min-h-24"></div>
        {#if onload}
        <div class="flex items-center justify-between bg-primary-700 h-full w-full max-w-[1200px] max-h-[850px]" in:fade={{duration: 1000}}>
            <div id="betting interface" class="flex flex-col justify-center items-center h-full w-1/3">
                <div id="betting amount buttons" class="flex m-[0.5rem] w-[13rem] justify-between ">
                    <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-surface-700 ">1/2</button>
                    <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-surface-700">2X</button>
                    <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-surface-700">Max</button>
                </div>
                <div id="betting amount" class="flex items-center bg-surface-900 p-2 border-[2px] border-primary-900 rounded-lg w-[15rem] h-[3rem] mb-[2rem]">
                    <img class=" h-5" src="/Gold-Coin.png" alt="gold coin">
                    <p class=" mr-3 ml-2 font-extrabold font-family-bakka text-sm"><input class="style-none bg-transparent outline-none remove-arrow" type="number"></p>
                </div>
                <div id="game-actions buttons" class=" grid gap-[0.5rem] grid-cols-2 w-[14.5rem] h-[6.5rem]"><button on:click={() => PlayerHit()} class="btn flex justify-evenly items-center rounded-lg w-[7rem] h-[3rem] bg-surface-700 relative overflow-hidden sc-gdfaqJ bUMKuM" disabled=""><svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M9.36002 14.968C9.32083 16.3417 9.10691 18.0525 7.95233 18.8222L7.95233 21.1833L3.70234 21.1833L3.70234 18.8222C2.94679 18.5705 2.46135 18.0799 1.81346 17.4344C1.36815 16.991 0.749072 16.3709 0.503517 16.1244C0.445906 16.0664 0.445907 15.9677 0.508712 15.9152C1.06263 15.4515 1.85407 15.3883 2.48637 15.7604C2.66535 15.8657 3.05871 16.0919 3.34959 16.259C3.50732 16.3492 3.70234 16.2349 3.70234 16.0536L3.70234 11.0306C3.70234 10.6396 4.01967 10.3223 4.41067 10.3223C4.80167 10.3223 5.119 10.6396 5.119 11.0306L5.119 13.7067C5.119 14.2155 5.46673 14.2155 5.46673 14.2155C5.86615 14.2155 5.79168 13.7067 5.79168 13.7067L8.51947 14.0056C9.00727 14.0599 9.37419 14.4773 9.36002 14.968Z" fill="#A7A7B9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4C0.447715 4 0 4.44772 0 5V13.2473C0 13.6262 0.210804 13.956 0.521546 14.1256C0.665624 14.1617 0.817354 14.2027 0.972485 14.2469C0.981627 14.2471 0.990799 14.2473 1 14.2473H2.86303L2.86303 10.6532C2.86303 8.99464 6.08997 8.99462 6.09432 10.6532C6.09867 12.3117 6.09432 12.5843 6.09432 12.5843L7.17308 12.738V5C7.17308 4.44772 6.72537 4 6.17308 4H1Z" fill="#4CF690"></path><g filter="url(#filter0_d_90_3641)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.73387 13.1004V7.56152C9.73387 7.00924 9.28615 6.56152 8.73387 6.56152H8.19629V12.8836L9.52577 13.073C9.59764 13.0818 9.66698 13.0909 9.73387 13.1004Z" fill="#4CF690"></path></g><defs><filter id="filter0_d_90_3641" x="0.196289" y="0.561523" width="17.5371" height="22.5391" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_90_3641"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_90_3641" result="shape"></feBlend></filter></defs></svg> Hit</button><button class="btn flex justify-evenly items-center relative overflow-hidden rounded-lg w-[7rem] h-[3rem] bg-surface-700 sc-gdfaqJ bFwAvv" disabled=""><svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M1.53789 6.95235C1.46236 6.89686 1.37906 6.8529 1.29103 6.82085C0.586621 6.56342 0 6.99522 0 7.74528V7.7845C0.0279282 7.99227 0.121307 8.18473 0.263014 8.33943C0.314742 8.39602 0.423178 8.53287 0.554078 8.70287C1.02449 9.31402 1.40481 9.82159 1.82021 10.4714C1.93298 10.6477 2.0629 10.85 2.20593 11.0727C2.46258 11.4723 2.76144 11.9377 3.07918 12.4368C3.42708 12.9833 3.72045 13.4448 3.829 13.6199C4.48559 14.7955 5.5545 15.6283 6.89446 15.9394C6.59685 15.3098 6.43041 14.6061 6.43041 13.8635C6.43041 11.1776 8.60773 9.00032 11.2936 9.00032C11.8436 9.00032 12.3724 9.09164 12.8654 9.25994L12.8658 4.09648C12.8658 3.55976 12.6162 3.15431 12.0793 3.15431C11.5397 3.15431 11.2901 3.55976 11.2901 4.09648V7.50376L10.5706 7.5023L10.5629 2.30395C10.5629 1.77088 10.3045 1.32074 9.76795 1.33665C9.25164 1.35195 9.00805 1.80755 9.00805 2.32411L9.0038 7.4938L8.26782 7.49222V1.12961C8.26782 0.663572 8.08398 0.293943 7.69128 0.190729C7.11899 0.0401578 6.64396 0.428608 6.64396 1.02033V7.48336L5.9058 7.48166L5.91005 2.70588C5.91005 2.16722 5.65165 1.71672 5.16739 1.61496C4.56049 1.48746 4.05899 1.91526 4.05899 2.53539V8.86206C4.05729 9.05841 3.82111 9.15689 3.68062 9.01979C3.35095 8.69844 3.00162 8.35963 2.80767 8.17152C2.70694 8.07382 2.64812 8.01678 2.65576 8.02396C2.65576 8.02396 1.92816 7.23953 1.53789 6.95235Z" fill="#A7A7B9"></path><g clip-path="url(#clip0_90_3622)"><path d="M11.2944 9.88477C9.10043 9.88477 7.31543 11.6698 7.31543 13.8637C7.31543 16.0577 9.10043 17.8427 11.2944 17.8427C13.4884 17.8427 15.2734 16.0577 15.2734 13.8637C15.2734 11.6698 13.4884 9.88477 11.2944 9.88477ZM11.2944 16.848C9.64896 16.848 8.31017 15.5092 8.31017 13.8637C8.31017 13.2357 8.50057 12.642 8.8626 12.1354L13.0227 16.2955C12.5161 16.6576 11.9224 16.848 11.2944 16.848ZM13.7262 15.5921L9.56607 11.4319C10.0727 11.0699 10.6664 10.8795 11.2944 10.8795C12.9398 10.8795 14.2786 12.2183 14.2786 13.8637C14.2786 14.4918 14.0882 15.0855 13.7262 15.5921Z" fill="#F64C4F"></path></g><defs><clipPath id="clip0_90_3622"><rect width="7.95794" height="7.95794" fill="white" transform="translate(7.31543 9.88477)"></rect></clipPath></defs></svg> Stand</button><button class="btn flex justify-evenly items-center rounded-lg w-[7rem] h-[3rem] bg-surface-700 relative overflow-hidden sc-gdfaqJ fBbvnL" disabled=""><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M12.7272 7.5449C12.6813 9.15562 12.431 11.1617 11.0766 12.0642V14.8327C11.1326 14.8327 6.23838 14.8327 6.09331 14.8327V12.0642C5.20739 11.7691 4.63818 11.1938 3.8785 10.4369C3.35636 9.91641 2.6299 9.1894 2.34197 8.90092C2.2711 8.83005 2.2783 8.71377 2.35582 8.64954C3.00476 8.11134 3.92889 8.03936 4.66753 8.47402C4.87738 8.59749 5.33861 8.86272 5.6797 9.05873C5.86353 9.16448 6.09331 9.0316 6.09331 8.81897V2.95138C6.09331 2.50399 6.43716 2.11917 6.88345 2.09813C7.36018 2.07542 7.75442 2.45582 7.75442 2.92757V6.80349C7.75442 6.95632 7.87845 7.08035 8.03127 7.08035C8.18409 7.08035 8.30812 6.95632 8.30812 6.80349V2.37387C8.30812 1.90212 8.70181 1.52172 9.1791 1.54442C9.62594 1.56546 9.96923 1.95029 9.96923 2.39768V6.66562C9.96923 6.89928 10.1619 7.08754 10.3972 7.0809C10.6243 7.07425 10.7998 6.87603 10.7998 6.64846V6.31181L11.7416 6.41646C12.3142 6.48013 12.7438 6.9696 12.7272 7.5449Z" fill="#A7A7B9"></path><path d="M4.98333 1.82064V2.37434C4.98333 2.52716 4.8593 2.65119 4.70648 2.65119H2.21481V4.11186C2.21481 4.18605 2.12511 4.22315 2.07306 4.17055L0 2.09749L2.07306 0.0244231C2.12511 -0.027625 2.21481 0.00891938 2.21481 0.0831156V1.54378H4.70648C4.8593 1.54378 4.98333 1.66781 4.98333 1.82064Z" fill="#4B69FF"></path><path d="M11.3511 1.54403H13.8427V0.0833615C13.8427 0.00916532 13.9324 -0.0279327 13.9845 0.024669L16.0575 2.09773L13.9845 4.1708C13.9324 4.22285 13.8427 4.18575 13.8427 4.1121V2.65144H11.3511C11.1982 2.65144 11.0742 2.52741 11.0742 2.37458V1.82088C11.0742 1.66806 11.1982 1.54403 11.3511 1.54403Z" fill="#4B69FF"></path></svg> Split</button><button class="btn flex justify-evenly items-center rounded-lg w-[7rem] h-[3rem] bg-surface-700 relative overflow-hidden sc-gdfaqJ ilzXdT" disabled=""><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M6.1655 11.18C6.11359 11.2141 6.05709 11.2311 6.00056 11.2311C5.94406 11.2311 5.88753 11.214 5.83562 11.18L1.44984 8.30615L0.203871 9.12261C-0.067957 9.30075 -0.067957 9.80915 0.203871 9.98725L6.00056 13.7857L11.7973 9.98725C12.0691 9.80912 12.0691 9.30072 11.7973 9.12261L10.5513 8.30615L6.1655 11.18Z" fill="#A7A7B9"></path><path d="M11.7973 4.67011L6.1655 0.979734C6.06166 0.911703 5.93944 0.911703 5.83562 0.979734L0.203871 4.67011C-0.067957 4.84825 -0.067957 5.35665 0.203871 5.53476L6.00056 9.33321L11.7973 5.53476C12.0691 5.35665 12.0691 4.84825 11.7973 4.67011Z" fill="#FFAE39"></path></svg> Double</button></div>
                <div id="place bet button" class="mt-[0.5rem]">
                    <button on:click={() => carddraw()} type="button" class="btn rounded-lg w-[14.5rem] h-[3rem] bg-primary-900">Place bet</button>
                </div>
            </div>
            <div id="spillbrett" class="flex flex-col items-center justify-between bg-primary-900 h-[92%] w-[58%] mr-[2.1%]">
                <div id="dealer kort" class="flex relative justify-between border-[0.1rem] mt-[1rem] border-black h-[11rem] w-[18rem]">
                    <img class="h-[11rem]" src={DealerCards[0]} alt="stupid">
                    <img class="absolute left-[5rem] h-[11rem]" src={DealerCards[1]} alt="stupid">
                </div>
                <div id="Dealer value">
                    <span>{SumDealerValue}</span>
                </div>
                <div id="player value">
                    <span>{SumPlayerValue}</span>
                </div>
                <div id="SpillerKort" class="flex relative justify-between border-[0.1rem] mb-[1rem] border-black h-[11rem] w-[18rem]">
                    <img class=" h-[11rem]" src={PlayerCards[0]} alt="stupid">
                    <img class=" absolute left-[5rem] h-[11rem]" src={PlayerCards[1]} alt="stupid">

                </div>
                    
            </div>
        </div>
        {/if}
    </div>
     <Chat/>
</div>

<style>
    .remove-arrow::-webkit-inner-spin-button,
    .remove-arrow::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>