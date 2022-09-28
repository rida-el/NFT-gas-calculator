let ws = new WebSocket("wss://stream.binance.com/ws/ethusdt@trade");
        let stockPrice = document.getElementById("stock-price");
        ws.onmessage = function (event) {
            let data = JSON.parse(event.data);
            stockPrice.innerText = parseFloat(data.p).toFixed(2) + "$";
            
        };
        function startLive() {
            const textLow = document.getElementById("text-low");
            const textNormal = document.getElementById("text-normal");
            const textFast = document.getElementById("text-fast");
            setInterval(() => {
                fetch("https://ethereum-api.xyz/gas-prices")
                    .then((res) => res.json())
                    .then((data) => {
                        textLow.textContent = data.result.slow.price;
                        textNormal.textContent = data.result.average.price;
                        textFast.textContent = data.result.fast.price;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }, 2000);
        }
        document.addEventListener("DOMContentLoaded", startLive);
        let opensea = [
            { title: "Register Account", price: 7,fastprice: 27 ,eth: "0.005 Ether",ethfast: "0.02 Ether" },
            { title: "Approve NFT", price: 0,fastprice: 3, eth: "0 Ether",ethfast: "0.002 Ether"},
            { title: "Buy NFT", price: 5,fastprice: 21, eth: "0.004 Ether",ethfast: "0.015 Ether"},
            { title: "Approve WETH", price: 0,fastprice: 2, eth: "0 Ether",ethfast: "0.002 Ether"},
            { title: "Wrap ETH -> WETH", price: 0,fastprice: 2, eth: "0 Ether",ethfast: "0.001 Ether"}
        ];
        let Foundation = [
            { title: "List NFT", price: 5,fastprice: 22, eth: "0.004 Ether",ethfast: "0.016 Ether"},
            { title: "Mint NFT", price: 5,fastprice: 22, eth: "0.004 Ether",ethfast: "0.016 Ether"},
            { title: "Create Collection", price: 3,fastprice: 13, eth: "0.002 Ether",ethfast: "0.009 Ether"},
            { title: "Change Price", price: 0,fastprice: 2, eth: "0 Ether",ethfast: "0.001 Ether"},
            { title: "Settle Auction", price: 5,fastprice: 18, eth: "0.003 Ether",ethfast: "0.013 Ether"},
            { title: "Place Bid", price: 1,fastprice: 4, eth: "0.001 Ether",ethfast: "0.003 Ether"}
        ];
        let Rarible = [
            { title: "Accept Bid", price: 4, eth: "0.003 Ether",fastprice: 17,ethfast: "0.012 Ether" },
            { title: "Mint NFT", price: 5, eth: "0.004 Ether",fastprice: 19,ethfast: "0.014 Ether" },
            { title: "Approve NFT", price: 0, eth: "0 Ether",fastprice: 3,ethfast: "0.002 Ether" },
            { title: "Approve WETH", price: 0, eth: "0 Ether",fastprice: 2,ethfast: "0.002 Ether" },
            { title: "Wrap ETH -> WETH", price: 0, eth: "0 Ether",fastprice: 2,ethfast: "0.001 Ether" }
        ];
        function hidePrice(id)
        {
            const p1 = document.getElementById("normal");
            const p2 = document.getElementById("fast");
            const p3 = document.getElementById("normal2");
            const p4 = document.getElementById("fast2");
            const p5 = document.getElementById("normal3");
            const p6 = document.getElementById("fast3");
            if(id == 'fast')
            {
                p1.style.display = "none";
                p2.style.display = "block";
                p3.style.display = "none";
                p4.style.display = "block";
                p5.style.display = "none";
                p6.style.display = "block";
            }else if (id == 'normal' || id == 'low'){
                p1.style.display = "block";
                p2.style.display = "none";
                p3.style.display = "block";
                p4.style.display = "none";
                p5.style.display = "block";
                p6.style.display = "none";
            }
        }
        const sectionCenter = document.querySelector(".section-center");
        window.addEventListener("load", function () {
            let displayData = opensea.map(function(item) {
                return `<div class="item">
                        <p>${item.title}</p>
                        <span>${item.price}$</span>
                        <p id="gas-price">${item.eth}</p>
                    </div>`;
            });
            displayData = displayData.join("");
            sectionCenter.innerHTML = displayData;
        });
        const sectionCenterfast = document.querySelector(".section-center-fast");
        window.addEventListener("load", function () {
            let displayData = opensea.map(function(item) {
                return `<div class="item">
                        <p>${item.title}</p>
                        <span>${item.fastprice}$</span>
                        <p id="gas-price">${item.ethfast}</p>
                    </div>`;
            });
            displayData = displayData.join("");
            sectionCenterfast.innerHTML = displayData;
        });
        const sectionCenter2 = document.querySelector(".section-center2");
        window.addEventListener("load", function () {
            let displayFoundation = Foundation.map(function(item) {
                return `<div class="item">
                        <p>${item.title}</p>
                        <span>${item.price}$</span>
                        <p id="gas-price">${item.eth}</p>
                    </div>`;
            });
            displayFoundation = displayFoundation.join("");
            sectionCenter2.innerHTML = displayFoundation;
        });
            const sectionCenter2fast = document.querySelector(".section-center2fast");
            window.addEventListener("load", function () {
                let displayDatafoun = Foundation.map(function(item) {
                    return `<div class="item">
                            <p>${item.title}</p>
                            <span>${item.fastprice}$</span>
                            <p id="gas-price">${item.ethfast}</p>
                        </div>`;
                });
                displayDatafoun = displayDatafoun.join("");
                sectionCenter2fast.innerHTML = displayDatafoun;
            });
        const sectionCenter3 = document.querySelector(".section-center3");
        window.addEventListener("load", function () {
            let displayRarible = Rarible.map(function(item) {
                return `<div class="item">
                        <p>${item.title}</p>
                        <span>${item.price}$</span>
                        <p id="gas-price">${item.eth}</p>
                    </div>`;
            });
            displayRarible = displayRarible.join("");
            sectionCenter3.innerHTML = displayRarible;
        });
        const sectionCenter3fast = document.querySelector(".section-center3fast");
        window.addEventListener("load", function () {
            let displayRariblefast = Rarible.map(function(item) {
                return `<div class="item">
                        <p>${item.title}</p>
                        <span>${item.fastprice}$</span>
                        <p id="gas-price">${item.ethfast}</p>
                    </div>`;
            });
            displayRariblefast = displayRariblefast.join("");
            sectionCenter3fast.innerHTML = displayRariblefast;
        });