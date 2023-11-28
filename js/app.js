//EVENT LOOP
//setTimeout, setInterval

const btn = document.querySelector('#laptops')
const olTag=document.querySelector('.list') 
const spin = document.querySelector('#spinner')
const btn2= document.querySelector('.acer')
const btnHp3=document.querySelector('.hp')
const btnLen=document.querySelector('.lenovo')
const btnDell=document.querySelector('.dell')
const btnAsus=document.querySelector('.asus')
const btnmac=document.querySelector('.macbook')
const inputs=document.querySelector('input')


const laptops=[
    {title:'Acer', model:'Nitro 5 Intel', ssd:512, vCard:true, ram:8, price:83000, year:2023, img:'https://content1.rozetka.com.ua/goods/images/big/366753858.jpg'},
    {title:'Acer', model:'ACER EXTENSA', ssd:512, vCard:true, ram:16, price:59000, year:2022, img:'https://static-ecapac.acer.com/media/catalog/product/e/x/ex215-23_nx.eh3si.003.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500'},
    {title:'Acer', model:'ACER SWIFT ', ssd:512, vCard:true, ram:8, price:64900, year:2021, img:'https://softech.kg/image/cache/cc128901f60385b0a8644d13ee7ca211.jpg'},
    {title:'HP', model:'Victus', ssd:1000, vCard:true, ram:16, price:93000, year:2022, img:'https://www.omen.com/content/dam/sites/omen/worldwide/laptops/2022-victus-15-amd/Image%20Main1.png'},
    {title:'HP', model:'Laptop', ssd:256, vCard:true, ram:8, price:43000, year:2021, img:'https://softech.kg/image/cache/ed7c20f93879c930b626b05b8d23d65b.jpg'},
    {title:'HP', model:'Pavilion', ssd:128, vCard:true, ram:4, price:31000, year:2020, img:'https://media.currys.biz/i/currysprod/M10218525_white_014?$l-large$&fmt=auto'},
    {title:'Lenovo', model:'Ideapad Slim', ssd:512, vCard:false, ram:16, price:43000, year:2019, img:'https://m.media-amazon.com/images/I/71iwcdBHcML._AC_UF1000,1000_QL80_.jpg'},
    {title:'Lenovo', model:'ThinkPad P51', ssd:500, vCard:false, ram:32, price:20000, year:2020, img:'https://www.mobility4less.de/pub/media/catalog/product/cache/4099278ffa19f9fd515b3b5bacf1271c/0/4/040581-lenovo-thinkpad-p51-1.jpg'},
    {title:'Lenovo', model:'V15 IML', ssd:256, vCard:false, ram:8, price:30000, year:2019, img:'https://www.laptopsdirect.co.uk/Images/BUN82NB003LUK89021_2_Supersize.jpg?v=34'},
    {title:'Dell', model:'Latitude', ssd:512, vCard:true, ram:8, price:60000, year:2022, img:'https://paykobo.com/media/catalog/product/image/43673be60/dell-latitude-5420-xcto-base-laptop-512gb-ssd-and-8gb-ram-y4f3m.jpg.mst.webp?width=700&height=700&store=default&image-type=image'},
    {title:'Dell', model:'Inspiron', ssd:256, vCard:true, ram:8, price:40000, year:2022, img:'https://www.gigahertz.com.ph/cdn/shop/files/INSPIRON-3511-Intell-Corei3-1115G4_black_74055dd7-edd1-4424-a55a-631e9c830530.webp?v=1693471965&width=800'},
    {title:'Dell', model:'Precision', ssd:512, vCard:true, ram:32, price:80000, year:2021, img:'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/workstations/mobile-workstations/precision/17-7770/media-gallery/workstation-precision-17-7770-gray-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3533&hei=2274&qlt=100,1&resMode=sharp2&size=3533,2274&chrss=full&imwidth=5000'},
    {title:'Asus', model:'ZenBook', ssd:512, vCard:true, ram:8, price:107000, year:2023, img:'https://softech.kg/image/cache/5f93da5b842fe72170366c1016ee3c48.jpg'},
    {title:'Asus', model:'VivoBooK', ssd:512, vCard:true, ram:8, price:68000, year:2022, img:'https://softech.kg/image/cache/37fe0dd2969817170876524b19a9509d.jpg'},
    {title:'Asus', model:'Gaming A15', ssd:1000, vCard:true, ram:16, price:117000, year:2023, img:'https://systema.kg/403044-large_default/asus-tuf-gaming-a15-fa506qm-hn128graphite-black-amd-ryzen-7-5800h-16gb-ddr4-1tb-ssd-nvme-pcie-nvidia-geforce-rtx-3060-6gb-156-fu.jpg'},
    {title:'MacBook', model:'Pro', ssd:1000, vCard:true, ram:16, price:120000, year:2021, img:'https://cdn.vox-cdn.com/thumbor/n1RDh_KFERytxxT5yVSquTCrYOo=/0x0:3000x1951/2000x1333/filters:focal(1500x976:1501x977)/cdn.vox-cdn.com/uploads/chorus_asset/file/24704501/macbook_air_15_dan_siefert_007.jpg'},
    {title:'MacBook', model:'Air', ssd:1000, vCard:true, ram:32, price:320000, year:2023, img:'https://cdn.isuremyanmar.com/wp-content/uploads/2023/06/M2-MacBook-Air-15-inch-2023-Starlight-3.jpg'},
    {title:'MacBook', model:'Touch Bar', ssd:512, vCard:true, ram:8, price:140000, year:2022, img:'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP749/SP749-mbp15touch-gray.jpg'},
]

function showLaptops(array) {
    olTag.innerHTML=''
    for (const laptop of array) {
        olTag.innerHTML+=`
        <li>
        <h4>${laptop.title}</h6>
        <h6>${laptop.model}</h6>
        <img width='200px' height='200px' src='${laptop.img}' />
        <p>${laptop.ram} gb</p>
        <h6>${laptop.ssd} GB</h6>
        <p class='price'>${laptop.price} som</p>
       
        </li>
        `
        
    }
}

// console.log(lapFilter);
inputs.onchange=()=> {
    const lapFilter=laptops.filter(lap=> lap.title.toLowerCase()===inputs.value.toLowerCase())
    console.log(lapFilter)
    spin.style.display='block'
    setTimeout(()=> {
        spin.style.display='none' 
        showLaptops(lapFilter)
    }, 2000)
  
}

btn.onclick=()=>{
    
    spin.style.display='block'
    setTimeout(() => {
        showLaptops(laptops)
        
         spin.style.display='none' 
    }, 2000)
}



 

btn2.onclick=(item)=>{
    spin.style.display='block'
    const lapFilter=laptops.filter(lap=> lap.title==='Acer')
console.log(lapFilter);
    setTimeout(()=> {
        spin.style.display='none' 
        showLaptops(lapFilter)
    }, 2000)
}


btnHp3.onclick=(item)=>{
    spin.style.display='block'
    const lapFilter=laptops.filter(lap=> lap.title==='HP')
console.log(lapFilter);
    setTimeout(()=> {
        spin.style.display='none' 
        showLaptops(lapFilter)
    }, 2000)
}

btnLen.onclick=(item)=>{
    spin.style.display='block'
    const lapFilter=laptops.filter(lap=> lap.title==='Lenovo')
console.log(lapFilter);
    setTimeout(()=> {
        spin.style.display='none' 
        showLaptops(lapFilter)
    }, 2000)
}

btnDell.onclick=()=> {
    spin.style.display='block'
    const lapFilter=laptops.filter(lap=> lap.title==='Dell')
    console.log(lapFilter);
    setTimeout(()=> {
        spin.style.display='none' 
        showLaptops(lapFilter)
    }, 2000)
}

btnAsus.onclick=()=> {
    spin.style.display='block'
    const lapFilter=laptops.filter(lap=> lap.title==='Asus')
    console.log(lapFilter)
    setTimeout(()=>{
        spin.style.display='none'
        showLaptops(lapFilter);
    }, 2000)
}

btnmac.onclick=()=>{
    spin.style.display='block'
    const lapFilter=laptops.filter(mac=> mac.title==='MacBook')
    console.log(lapFilter);
    setTimeout(()=>{
        spin.style.display='none'
        showLaptops(lapFilter);
    }, 2000)
}


