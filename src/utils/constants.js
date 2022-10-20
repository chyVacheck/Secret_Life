
const nationality = {
  Urk: 'Ukrainian',
  Pol: 'Polka',
  Kaz: 'Kazakh',
  Tur: 'Turkish',
  Tar: 'Tatar',
}

export const form = {
  inputSelector: '.casting__input',
  submitButtonSelector: '#casting-button-submit',
  activeButtonClass: 'casting__submit-button_valid',
  inactiveButtonClass: 'casting__submit-button_invalid',
  buttonClass: 'button',
  errorSelector: '.casting__error-mesage',
};

export const errorMesages = {
  tooShort: 'Ввод слишком короткий',
  tooLong: 'Ввод слишком длинный',
  typeMismatchUrl: 'Введите ссылку на изображение',
  valueMissing: 'Осталось заполнить',
  rangeUnderflow: 'Нужно число по больше',
  rangeOverflow: 'Нужно число по меньше',
}

export const ListOfWomen = [
  {
    id: 1,
    firstName: 'Luda',
    age: 22,
    height: 168,
    weight: 47,
    parameter: {
      bust: 90,
      waist: 58,
      hips: 90,
    },
    nationality: nationality.Urk,
    instagram: 'Livanishina',
    text: 'Врач эстетичной медицины, косметолог, anti- age dr, как в шутке, что нужно искать ту, которая в будущем сможет распознать инсульт, а я ещё и профилактирую) Обожаю своё дело, становлюсь лучшей версией себя каждую минуту, каждый день) и во всех сферах жизни. Увлекаюсь безграничной красками жизни - от поэзии с современным искусством до стрельбы и флай стреччинга и боксом и много чем) Обожаю спорт, не представляю свою жизнь без него) Считаю, что каждый день должен приносить ещё больше огня в жизнь, делать так, чтобы глаза горели … от всего)'
  },
  {
    id: 2,
    firstName: 'Alina',
    age: 17,
    height: 169,
    weight: 49,
    parameter: {
      bust: 90,
      waist: 60,
      hips: 90,
    },
    nationality: nationality.Urk,
    instagram: 'ahoshton.a',
    text: '' //todo add text
  },
  {
    id: 3,
    firstName: 'Tomiris',
    age: 17,
    height: 171,
    weight: 51,
    parameter: {
      bust: 84,
      waist: 64,
      hips: 93,
    },
    nationality: nationality.Kaz,
    instagram: 'lashesakb',
    text: 'Занимаюсь спортом с детства, разносторонняя личность, люблю путешествия, увлекаюсь бьюти сферой'
  },
  {
    id: 4,
    firstName: 'Katya',
    age: 17,
    height: 162,
    weight: 51,
    parameter: {
      bust: 110,
      waist: 61,
      hips: 90,
    },
    nationality: nationality.Urk,
    instagram: 'kendjalin',
    text: '' //todo add text
  },
  {
    id: 5,
    firstName: 'Alevtina',
    age: 19,
    height: 162,
    weight: 48.4,
    parameter: {
      bust: 87,
      waist: 59,
      hips: 88,
    },
    nationality: nationality.Urk,
    instagram: 'Gromovaa.al',
    text: 'Привет меня зовут Алевтина, мне 19 лет. Я очень творческая личность. Моя работа непосредственно связана с искусством. Я рисую на телах людей. Обожаю путешествовать посещать новые красивые места, это даём мне много энергии. Иногда танцую, a в целом открыта ко все у новому, так жить интереснее'
  },
  {
    id: 6,
    firstName: 'Nastya',
    age: 18,
    height: 166,
    weight: 53,
    parameter: {
      bust: 82,
      waist: 61,
      hips: 92,
    },
    nationality: nationality.Pol,
    instagram: 'nasti_k6',
    text: 'Живу в Польше уже 4 года. Занимаюсь танцами и спортом. Работаю в салоне красоты, делаю перманентный макияж. Люблю дождливую погоду, теплое море'
  },
  {
    id: 7,
    firstName: 'Tatiana',
    age: 24,
    height: 172,
    weight: 52,
    parameter: {
      bust: 81,
      waist: 60,
      hips: 90,
    },
    nationality: nationality.Urk,
    instagram: 'boikova.tati',
    text: 'Увлекаюсь спортивно-бальными танцами, фотографией, спортом, путешествиями. У меня высшее экономическое образование. Занималась финансами а сейчас открыла своё дело. Люблю жизнь во всех её проявлениях'
  },
  {
    id: 8,
    firstName: 'Enesha',
    age: 18,
    height: 165,
    weight: 48,
    parameter: {
      bust: 83,
      waist: 60,
      hips: 93,
    },
    nationality: nationality.Tur,
    instagram: 'sun__3012',
    text: 'Я учусь в Стамбуле на психолога. Занимаюсь спортом, люблю читать. Люблю путешествовать и пробовать новое, открыта к новым возможностям'
  },
  {
    id: 9,
    firstName: 'Olga',
    age: 23,
    height: 154,
    weight: 59,
    parameter: {
      bust: 99,
      waist: 80,
      hips: 104,
    },
    nationality: nationality.Urk,
    instagram: '_yakovleva_14.07',
    text: 'Родилась и живу в городе Каменское, Днепропетровская область. Так же часто бываю в городе Киев. Во время школы, параллельно училась в музыкальной школе, класс фортепиано. Сейчас с удовольствием бы восстановила свои знания и умения играть. Увлекалась танцами на пилоне, занималась около года. Заканчиваю университет Киевский политехнический институт имени Игоря Сикорского, бакалаврат по специальности «Экономика предприятия», сейчас магистратура «Менеджмент и бизнес-административние». Люблю готовить, особенно десерты. Одна из мечт - это собственная кондитерская. Люблю путешествия, испытываю радость и счастье от этого. Мечтаю побывать в Италии. Сейчас прикладываю много усилий к изучению английского языка. По поводу характера - эмоциональная, жизнерадостная, немного ревнива, честная и добрая. Имею чудесные и прекрасные глазки зеленого цвета. Обожаю животных, есть кошка, но хочу еще маленькое пушистое счастье - собачку, порода шпиц. В столь юном возрасте уже знаю и понимаю что готова к семье в которой царит полная гармония, безграничная страсть и любовь'
  },
  {
    id: 10,
    firstName: 'Ludmila',
    age: 22,
    height: 160,
    weight: 45,
    parameter: {
      bust: 90,
      waist: 61,
      hips: 92,
    },
    nationality: nationality.Urk,
    instagram: 'lmaksyuta',
    text: 'Работаю юристом в фармацевтической компании, параллельно учусь на заочной форме обучения (криминальное право), в дальнейшем планирую адвокатуру и свое адвокатское бюро. С 16 живу одна и обеспечиваю себя. Проживаю в  Киеве, у меня есть кот, увлекаюсь кондитеркой (часто выпекаю) и люблю активный отдых . До войны были попытки обуздать гитару, сейчас хочу вернуться к этому, потому что не хватает творчества в жизни. Много читаю и люблю людей'
  },
  {
    id: 11,
    firstName: 'Anastasia',
    age: 19,
    height: 168,
    weight: 55,
    parameter: {
      bust: 85,
      waist: 60,
      hips: 90,
    },
    nationality: nationality.Urk,
    instagram: 'nastiamudraa',
    text: '' //todo add text
  },
  {
    id: 12,
    firstName: 'Nastya',
    age: 24,
    height: 170,
    weight: 50,
    parameter: {
      bust: 80,
      waist: 70,
      hips: 90,
    },
    nationality: nationality.Urk,
    instagram: 'markovaa1959',
    text: 'Настя, 24 роки. Проживаю в Україні в м. Чернівці, по гороскопу РИБА і по житті знак точно відповідає мені. Захоплююсь психологією, обожнюю дивитись фільми, займаюсь спортом.'
  },
  {
    id: 13,
    firstName: 'Svetlana',
    age: 23,
    height: 168,
    weight: 52,
    parameter: {
      bust: null,
      waist: null,
      hips: null,
    },
    nationality: nationality.Urk,
    instagram: 'sveta_victoria',
    text: 'Я закончила магистратуру, специальность бухгалтер. Семья хорошая, отец был учителем, мама воспитатель, есть еще младший брат. Работала администратором в ресторане, но из-за войны временно переехала в другую страну. Постоянно прохожу различные курсы и обучение, на данный момент это по психологии (женская энергия), параллельно смотрю еще по инстаграму и учу иностранный язык. Люблю слушать музыку и танцевать, когда никто не видит. Очень люблю читать и узнавать новых людей. Байдарки и горы моё вдохновение и место силы. Также, читаю книги и медитирую. Нравится посещать различные конференции и форумы'
  },
  {
    id: 14,
    firstName: 'Zemfira',
    age: 22,
    height: 175,
    weight: 52,
    parameter: {
      bust: 97,
      waist: 80,
      hips: 99,
    },
    nationality: nationality.Tar,
    instagram: 'zemfira_farrakhova',
    text: 'Не знаю к кому оброщаюсь, но все же привет меня зовут Земфира, очень сильная духом, люблю детей работала в детских лагерях, шикарно готовлю. Много где путешествовала, умею себя вести в обществе. По образованию Психолог. У меня была очень сильная трансформация я хорошо похудела, поэтому в ближайшее время планирую операцию на подтяжку кожи для полной эстетичности. Не строила отношения так как не было времени и я занималась собой, и все кого я встречала на своём пути были с слабым характером либо не имеющие желание стремиться дальше и совершенствоваться'
  },
  {
    id: 15,
    firstName: 'Karina',
    age: 17,
    height: 164,
    weight: 56,
    parameter: {
      bust: 87,
      waist: 65,
      hips: 99,
    },
    nationality: nationality.Urk,
    instagram: 'imkaorimi',
    text: '' //todo add text
  },
]

export const inputValidClass = 'casting__input-valid';
export const inputInValidClass = 'casting__input-invalid';

/*
{
    id: 13,
    firstName: 'Name',
    age: 20,
    height: 170,
    weight: 40,
    parameter: {
      bust: 90,
      waist: 60,
      hips: 90,
    },
    nationality: nationality.Urk,
    instagram: 'Name',
    text: ''
  },

*/
