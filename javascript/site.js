
//-- create slide show functions
const SLIDE_SHOW_CON = [0, 1, 2];

function onLeftArrow (arr, fun) {
  const deletedValue = arr.pop();
  arr.unshift(deletedValue);
  fun(arr[0], arr[1])
}
function onRightArrow (arr, fun) {
  const deletedValue = arr.shift();
  arr.push(deletedValue);
  fun(arr[0], deletedValue)
}

document.getElementById('left-arrow').
  addEventListener('click', () => onLeftArrow(SLIDE_SHOW_CON, handleSlideShow));
document.getElementById('right-arrow').
  addEventListener('click', () => onRightArrow(SLIDE_SHOW_CON, handleSlideShow));

const SLIDE_SHOW_ITEMS = document.getElementById('slide-show').children;
function handleSlideShow(current, previous) {
  SLIDE_SHOW_ITEMS[previous].setAttribute('class', 'header-item');
  SLIDE_SHOW_ITEMS[current].setAttribute('class', 'header-item active');
 }

setInterval(() => onRightArrow(SLIDE_SHOW_CON, handleSlideShow), 5000);

//-- create slide show functions for users opinions
const OPINIONS_CON = [0, 1, 2];

document.getElementById('op-left-arrow').
  addEventListener('click', () => onLeftArrow(OPINIONS_CON, handleOpinionShow));
document.getElementById('op-right-arrow').
  addEventListener('click', () => onRightArrow(OPINIONS_CON, handleOpinionShow));


const OPINIONS_ITEMS = document.getElementById('opinions').children;
function handleOpinionShow(current, previous) {
  OPINIONS_ITEMS[previous].setAttribute('class', 'op');
  OPINIONS_ITEMS[current].setAttribute('class', 'op active');
}

setInterval(() => onRightArrow(OPINIONS_CON, handleOpinionShow), 5000);

//-----------------------------------------------------------

const VIEW_ELE = (num) => {
  ITEMS_CON.style.display = 'none';
  const ITEMS = ITEMS_CON.children;
  let end = num * 10;

  for (let y = 0; y < ITEMS.length; y++) {
    if (y < end && y > end - 11) {
      ITEMS[y].style.display = '';
    }else {
      ITEMS[y].style.display = 'none';
    }
  }
  ITEMS_CON.style.display = '';
}

//----------------------------------------------------------

const data = [
  {
    origin: 'origin',
    gender: 'women',
    carrer: 'test',
    city: 'test',
    countery: 'syria',
    nationality: 'test',
    skinColor: 'test',
    currentState: 'test',
    age: 'test',
    code: '1',
    marriageType: 'normal',
  },
  {
    origin: 'test',
    gender: 'women',
    carrer: 'test',
    city: 'test',
    currentState: 'test',
    countery: 'syria',
    nationality: 'test',
    skinColor: 'test',
    age: 'test',
    code: '2',
    marriageType: 'normal',
  },
  {
    origin: 'test',
    gender: 'women',
    carrer: 'test',
    skinColor: 'skinColor',
    age: 'test',
    currentState: 'test',
    city: 'test',
    nationality: 'test',
    code: '3',
    countery: 'syria',
    marriageType: 'normal',
  },

  {
    origin: 'test',
    gender: 'mans',
    carrer: 'test',
    skinColor: 'skinColor',
    age: 'test',
    currentState: 'test',
    city: 'test',
    nationality: 'test',
    code: '4',
    countery: 'test',
    marriageType: 'm1',
  },

  {
    origin: 'test',
    gender: 'test',
    carrer: 'test',
    skinColor: 'skinColor',
    age: 'test',
    currentState: 'test',
    city: 'test',
    nationality: 'test',
    code: '5',
    countery: 'test',
    marriageType: 'test',
  },

  {
    origin: 'test',
    gender: 'test',
    carrer: 'test',
    skinColor: 'skinColor',
    age: 'test',
    currentState: 'test',
    city: 'test',
    nationality: 'test',
    code: '6',
    countery: 'test',
    marriageType: 'test',
  },
  {
    origin: 'test',
    gender: 'test',
    carrer: 'test',
    skinColor: 'skinColor',
    age: 'test',
    currentState: 'test',
    city: 'test',
    nationality: 'test',
    code: '7',
    countery: 'test',
    marriageType: 'test',
  },
  {
    origin: 'test',
    gender: 'test',
    carrer: 'test',
    skinColor: 'skinColor',
    age: 'test',
    currentState: 'test',
    city: 'test',
    nationality: 'test',
    code: '8',
    countery: 'test',
    marriageType: 'test',
  },
  {
    origin: 'test',
    gender: 'test',
    carrer: 'test',
    skinColor: 'skinColor',
    age: 'test',
    currentState: 'test',
    city: 'test',
    nationality: 'test',
    code: '9',
    countery: 'test',
    marriageType: 'test',
  },
  {
    origin: 'test',
    gender: 'test',
    carrer: 'test',
    skinColor: 'skinColor',
    age: 'test',
    currentState: 'test',
    city: 'test',
    nationality: 'test',
    code: '10',
    countery: 'test',
    marriageType: 'test',
  },
  {
    origin: 'test',
    gender: 'test',
    carrer: 'test',
    skinColor: 'skinColor',
    age: 'test',
    currentState: 'test',
    city: 'test',
    nationality: 'test',
    code: '11',
    countery: 'test',
    marriageType: 'test',
  },
  {
    origin: 'test',
    gender: 'test',
    carrer: 'test',
    skinColor: 'skinColor',
    age: 'test',
    currentState: 'test',
    city: 'test',
    nationality: 'test',
    code: '12',
    countery: 'test',
    marriageType: 'test',
  },
]

const ITEMS_CON = document.getElementById('users');
let filteredData;
let pagenationLength;
let currentPage ;

filteredData = [...data];
pagenationLength = (filteredData.length % 10) !== 0 ? Number((filteredData.length / 10).toFixed(0)) + 1: (filteredData.length / 10);
currentPage = 1;
document.getElementById('items-length').innerHTML = pagenationLength;

const displayData = (arr, itemsNum) => {
  ITEMS_CON.style.display = 'none';
  ITEMS_CON.innerHTML = ''
  const ITEMS = [...arr];
  let end = itemsNum * 10;
  
  const FRAGEMENT = document.createDocumentFragment();

  for (let y = end - 10; (y < end && y < ITEMS.length); y++) {
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${ITEMS[y].origin}</td>
        <td>${ITEMS[y].gender}</td>
        <td>${ITEMS[y].carrer}</td>
        <td>${ITEMS[y].skinColor}</td>
        <td>${ITEMS[y].age}</td>
        <td>${ITEMS[y].currentState}</td>
        <td>${ITEMS[y].city}</td>
        <td>${ITEMS[y].countery}</td>
        <td>${ITEMS[y].nationality}</td>
        <td>${ITEMS[y].code}</td>
      `
      FRAGEMENT.appendChild(tr);
    
  }
  ITEMS_CON.appendChild(FRAGEMENT)
  ITEMS_CON.style.display = '';
}

displayData(filteredData, 1)



const COUNTER = document.getElementById('counter') 

document.getElementById('increase-counter').
  addEventListener('click', () => {
      if ( Number(COUNTER.value) < pagenationLength ) {
          let y = Number(COUNTER.value) + 1
          COUNTER.value = y;
          currentPage = y;
          displayData(filteredData, y);
        }
})

document.getElementById('decrease-counter').
  addEventListener('click', () => {
      if (Number(COUNTER.value) > 1 ) {
        let y = Number(COUNTER.value) - 1
        COUNTER.value = y;
        currentPage = y;
        displayData(filteredData, y);
    }
  })

const handleCounter = (e) => {
  return Number(e.target.value) ? displayData(filteredData, Number(e.target.value)) : undefined;
}
COUNTER.addEventListener('change', handleCounter)
COUNTER.addEventListener('keyup', handleCounter)

const CODE_INPUT = document.getElementById('by-code');

CODE_INPUT.addEventListener("keyup", function(e) {
  if (e.target.value) {
    let filterValue = Number(e.target.value);
    const ITEMS = JSON.parse(JSON.stringify(data)).filter((x) => Number(x.code) ===  filterValue);
    displayData(ITEMS, 1)
    document.getElementById('pagenation').style.display='none'
  } else {
    document.getElementById('pagenation').style.display=''
    displayData(filteredData, currentPage)
  }
});

const SELECTS = {
  gender: '',
  marriageType: '',
  countery: ''
}

const filterSelected = () => {
  filteredData = JSON.parse(JSON.stringify(data)).
    filter((i) => {
      let g = SELECTS.gender ? i.gender == SELECTS.gender : true;
      let m = SELECTS.marriageType ? i.marriageType == SELECTS.marriageType : true;
      let c = SELECTS.countery ? i.countery == SELECTS.countery : true;

      return g && m && c
    });
    displayData(filteredData, 1);
    pagenationLength = (filteredData.length % 10) !== 0 ? Number((filteredData.length / 10).toFixed(0)) + 1: (filteredData.length / 10);
    document.getElementById('items-length').innerHTML = pagenationLength;
    
}

document.getElementById('gender').
  addEventListener('change', (e) => {
    SELECTS.gender = e.target.value;
    filterSelected();
  })
document.getElementById('countery').
  addEventListener('change', (e) => {
    SELECTS.countery = e.target.value;
    filterSelected();
  })
document.getElementById('marriageType').
  addEventListener('change', (e) => {
    SELECTS.marriageType = e.target.value;
    filterSelected();
  })
