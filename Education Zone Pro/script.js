let main = document.querySelector("main");
let prew = document.querySelector(".prew");
let next = document.querySelector(".next");

let arr = ["Background.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

function effektMainBlur(){
    let set = setInterval(() => {
        main.style.filter = 'blur(50px)'
    }, 100);
    setTimeout(() => {
        main.style.filter = 'blur(0px)'
        clearInterval(set)
    }, 200);   
}

let x = 0;
next.onclick = function () {
  x++;
  if (x <= arr.length - 1) {
    main.style.background = `url(${arr[x]})`;
  } 
  else {
    x = 0;
    main.style.background = `url(${arr[x]})`;
  }
  effektMainBlur()
};

prew.onclick = function () {
  if (x > 0) {
    x--;
    main.style.background = `url(${arr[x]})`;
  }
  else {
    x = arr.length - 1;
    main.style.background = `url(${arr[x]})`;
  }
  effektMainBlur()
};

let Eng = document.querySelector('.eng');
let Arm = document.querySelector('.arm');
let Rus = document.querySelector('.rus');
let translate = document.querySelectorAll('#translate');

let arrRus = [
    'Быстрые ссылки',
    'Главное',
    'Тема',
    'Курсы',
    'Команда',
    'События',
    'Тест',
    'Страницы',
    'Ярлыки',
    'Гид по стилю',
    'Магазин',
    'выдающееся образование',
    'удивительная технология',
    'ЧИТАТЬ ДАЛЕЕ',
    'Будущие студенты',
    'На этой странице вы можете добавлять всевозможную информацию, которую вы хотите показать своим будущим ученикам.',
    'Наше общество',
    'Вы можете использовать наше сообщество для отображения информации, связанной с сообществом в вашем колледже или университете.',
    'Курсы',
    'Вы можете легко посетить или прочитать нашу страницу со списком курсов и все наши курсы, просто нажав на нее.',
    'События',
    'Вы можете направить своих посетителей на страницу событий и просмотреть все наши предстоящие события, нажав на нее.',
    'Добро пожаловать в университет',
    'Education Zone Pro — красивая тема премиум-класса, созданная для учебных заведений и колледжей. Тема легко настраивается и проста в использовании. Это позволяет вам легко создать веб-сайт вашего института. Используйте возможности темы для создания веб-сайта вашего учебного заведения с чистым, профессиональным дизайном и функциями, позволяющими профессионально донести ваше сообщение до потенциальных студентов.',
    'Год основания',
    'Заслуженные ученые',
    'Степенные программы',
    'Количество студентов'
]

let arrArm = [
    'Արագ Հղումներ',
    'Գլխավոր',
    'Թեմա',
    'Կուրսեր',
    'Թիմ',
    'Իվենթներ',
    'Տեստ',
    'Էջեր',
    'Հղումներ',
    'Ոճի գիդ',
    'Խանութ',
    'Բարձրորակ ուսուցում',
    'զարմանալի մեթոդներ',
    'ԻՄԱՆԱԼ ԱՎԵԼԻՆ',
    'Ուսանողներին',
    'Այս էջում կարող եք ավելացնել բոլոր տեսակի տեղեկություններ, որոնք ցանկանում եք ցուցադրել ձեր ապագա ուսանողներին:',
    'Մեր Թիմը',
    'Դուք կարող եք օգտագործել մեր համայնքը՝ ձեր քոլեջում կամ համալսարանում համայնքի հետ կապված տեղեկատվություն ցուցադրելու համար:',
    'Կուրսեր',
    'Դուք կարող եք հեշտությամբ այցելել կամ կարդալ մեր դասընթացների ցանկի էջը և մեր բոլոր դասընթացները՝ պարզապես սեղմելով դրա վրա:',
    'Իվենթներ',
    'Դուք կարող եք ձեր այցելուներին տանել Իրադարձությունների էջ և դիտել մեր բոլոր առաջիկա իրադարձությունները՝ սեղմելով սրա վրա:',
    'Բարի գալուստ ուսումնարան',
    'Education Zone Pro-ն գեղեցիկ պրեմիում թեմա է՝ ստեղծված ուսումնական հաստատությունների և քոլեջների համար: Թեման շատ հարմարեցված է և հեշտ օգտագործման համար: Այն թույլ է տալիս անխափան կառուցել ձեր ինստիտուտի կայքը: Օգտագործեք թեմայի ուժը՝ ստեղծելու ձեր հաստատության կայքէջը, որն ունի մաքուր, պրոֆեսիոնալ ձևավորում և առանձնահատկություններ՝ ձեր ուղերձը ձեր ապագա ուսանողներին պրոֆեսիոնալ կերպով հաղորդելու համար:',
    'Հիմնադրում',
    'Ուսուցում',
    'Ծրագրեր',
    'Ուսանողներ'
]
function rus () {
    Rus.onclick = function () {
        translate.forEach((elem,i)=>{
            elem.textContent = `${arrRus[i]}`;
        })
    } 
}
rus();

function arm() {
    Arm.onclick = function () {
        translate.forEach((elem,i)=>{
            elem.textContent = `${arrArm[i]}`;
        })
    }  
}
arm();

Eng.onclick = function () {
    location.reload();
}