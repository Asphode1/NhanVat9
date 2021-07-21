var meminfo = [
  {
    "name": "Mai Trung Kiên (Trung Kiên)",
    "logo": "./images/Kien.jpg",
    "link": "https://www.facebook.com/asphodel191618",
    "mail": "Kien.MT200301@sis.hust.edu.vn",
    "dt": "0333439931"
  },
  {
    "name": "Lê Nam Khánh",
    "logo": "./images/LNKhanh.jpg",
    "link": "https://www.facebook.com/namkhanh.le.9889",
    "mail": "Khanh.LN200316@sis.hust.edu.vn",
    "dt": "0971387789"
  },
  {
    "name": "Đỗ Trung Kiên",
    "logo": "./images/DTKien.jpg",
    "link": "https://www.facebook.com/profile.php?id=100009523719908",
    "mail": "KIEN.DT182922@sis.hust.edu.vn",
    "dt": "0984245901"
  },
  {
    "name": "Nguyễn Bá Huy (Huy Kane)",
    "logo": "./images/HuyKane.jpg",
    "link": "https://www.facebook.com/yugi.huy.31",
    "mail": "HUY.NB182582@sis.hust.edu.vn",
    "dt": "0814458996"
  },
  {
    "name": "Thái Đình Huy (Huy)",
    "logo": "./images/HuyThai.jpg",
    "link": "https://www.facebook.com/huy.thais",
    "mail": "HUY.TD184487@sis.hust.edu.vn",
    "dt": "0336121100"
  },
  {
    "name": "Nguyễn Thế Khỏe",
    "logo": "./images/Khoe.jpg",
    "link": "https://www.facebook.com/profile.php?id=100011180913485",
    "mail": "Khoe.NT191911@sis.hust.edu.vn",
    "dt": "0962237159"
  },
  {
    "name": "Nguyễn Mạnh Khang",
    "logo": "./images/Khang.jpg",
    "link": "https://www.facebook.com/profile.php?id=100012434370344",
    "mail": "khang.nm162117@sis.hust.edu.vn",
    "dt": "0962149032"
  },
  {
    "name": "Nguyễn Duy Khánh",
    "logo": "./images/NDKhanh.jpg",
    "link": "https://www.facebook.com/profile.php?id=100012608566507",
    "mail": "KHANH.ND191908@sis.hust.edu.vn",
    "dt": "0337762911"
  },
  {
    "name": "Lê Minh Khải (Lê Khải)",
    "logo": "./images/LeKhai.jpg",
    "link": "https://www.facebook.com/profile.php?id=100015392524378",
    "mail": "KHAI.LM192923@sis.hust.edu.vn",
    "dt": "0389100164"
  },{
    "name": "Ngô Thị Ngọc Huyền (Nhu Yen)",
    "logo": "./images/Huyen.jpg",
    "link": "https://www.facebook.com/nhuyene",
    "mail": "huyen.ntn158168@sis.hust.edu.vn",
    "dt": ""
  }
]
const meminf = document.querySelector('.memberinfo')
for(var i = 0 ; i < 10 ; i++){
  const mem = document.createElement('div')
  mem.classList.add('member')
  const logoblock = document.createElement('div')
  logoblock.classList.add('logoblock')
  const memlogo = document.createElement('img')
  memlogo.classList.add('memlogo')
  memlogo.src = meminfo[i].logo
  logoblock.appendChild(memlogo)
  mem.appendChild(logoblock)
  const block = document.createElement('div')
  const innerblock = document.createElement('div')
  block.classList.add('block')
  innerblock.classList.add('inblock')
  const p = document.createElement('p')
  const fb = document.createElement('a')
  fb.innerHTML = meminfo[i].name
  fb.href = meminfo[i].link
  fb.target = "_blank"
  fb.rel = "noopener noreferrer"
  p.appendChild(fb)
  innerblock.appendChild(p)
  const pmail = document.createElement('p')
  const amail = document.createElement('a')
  amail.innerHTML = meminfo[i].mail
  amail.href = "mailto:" + meminfo[i].mail
  pmail.appendChild(amail)
  const role = document.createElement('p')
  role.classList.add('role')
  if(i!=0) role.innerText = "Thành Viên"
  else role.innerText = "Trưởng nhóm"
  const dt = document.createElement('p')
  dt.innerText = meminfo[i].dt
  innerblock.appendChild(role)
  innerblock.appendChild(dt)
  innerblock.appendChild(pmail)
  block.appendChild(innerblock)
  mem.appendChild(block)
  meminf.appendChild(mem)
}
